export type ValidationSeverity = 'required' | 'recommended' | 'defaultable';

export interface ValidationContext {
  [key: string]: any;
}

export interface ValidationRule {
  field: string;
  label: string;
  stage?: string;
  segment?: string;
  severity: ValidationSeverity;
  defaultValue?: any;
  when?: (data: Record<string, any>, context?: ValidationContext) => boolean;
  /**
   * Optional check for values that are technically valid (so they must NOT be
   * flagged as missing) but the user/agent should be advised about. Typical use:
   * numeric fields whose current value is 0 and will be saved as-is unless changed.
   */
  adviseWhen?: (value: any, data: Record<string, any>, context?: ValidationContext) => boolean;
  advisoryMessage?: string;
}

export interface ValidationIssue {
  field: string;
  label: string;
  stage?: string;
  segment?: string;
  severity: ValidationSeverity;
  value: any;
}

export interface AppliedDefault {
  field: string;
  label: string;
  value: any;
}

export interface ValidationAdvisory {
  field: string;
  label: string;
  value: any;
  message?: string;
}

export interface ValidationResult {
  complete: boolean;
  missing: ValidationIssue[];
  warnings: ValidationIssue[];
  defaults: AppliedDefault[];
  advisories: ValidationAdvisory[];
  data: Record<string, any>;
}

export function isMissingValue(value: any): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'number') {
    return Number.isNaN(value);
  }

  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    return (
      normalized === '' ||
      normalized === 'undefined' ||
      normalized === 'null' ||
      normalized === 'nan' ||
      normalized === '[object object]'
    );
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}

const LICENSE_EXPIRATION_PLACEHOLDER_PATTERN = /(^|\D)0(\D|$)|--|__|\/\/|invalid date/i;

export function isValidLicenseExpirationDate(value: any): boolean {
  return !!normalizeLicenseExpirationDate(value);
}

export function normalizeLicenseExpirationDate(value: any): {
  isoValue: string;
  displayValue: string;
  storageValue: string;
} | null {
  if (value === null || value === undefined) {
    return null;
  }

  const text = String(value).trim();
  if (!text || LICENSE_EXPIRATION_PLACEHOLDER_PATTERN.test(text)) {
    return null;
  }

  const digitsOnly = text.replace(/\D/g, '');
  if (!digitsOnly || /^0+$/.test(digitsOnly)) {
    return null;
  }

  const buildResult = (year: number, month: number, day: number) => {
    if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) {
      return null;
    }

    const candidate = new Date(year, month - 1, day);
    if (
      candidate.getFullYear() !== year ||
      candidate.getMonth() !== month - 1 ||
      candidate.getDate() !== day
    ) {
      return null;
    }

    const storageValue = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const displayValue = `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;

    return {
      isoValue: new Date(Date.UTC(year, month - 1, day)).toISOString(),
      displayValue,
      storageValue
    };
  };

  const isoMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) {
    return buildResult(Number(isoMatch[1]), Number(isoMatch[2]), Number(isoMatch[3]));
  }

  const slashMatch = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (slashMatch) {
    return buildResult(Number(slashMatch[3]), Number(slashMatch[2]), Number(slashMatch[1]));
  }

  const parsed = new Date(text);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return buildResult(parsed.getFullYear(), parsed.getMonth() + 1, parsed.getDate());
}

export function validateClaimStage(
  data: Record<string, any>,
  rules: ValidationRule[],
  context?: ValidationContext
): ValidationResult {
  const validatedData = { ...(data || {}) };
  const missing: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];
  const defaults: AppliedDefault[] = [];
  const advisories: ValidationAdvisory[] = [];

  const pushAdvisoryIfNeeded = (rule: ValidationRule) => {
    if (!rule.adviseWhen) {
      return;
    }
    const finalValue = validatedData[rule.field];
    if (rule.adviseWhen(finalValue, validatedData, context)) {
      advisories.push({
        field: rule.field,
        label: rule.label,
        value: finalValue,
        message: rule.advisoryMessage
      });
    }
  };

  for (const rule of rules) {
    if (rule.when && !rule.when(validatedData, context)) {
      continue;
    }

    const value = validatedData[rule.field];

    if (!isMissingValue(value)) {
      pushAdvisoryIfNeeded(rule);
      continue;
    }

    if (rule.severity === 'defaultable' && !isMissingValue(rule.defaultValue)) {
      validatedData[rule.field] = rule.defaultValue;
      defaults.push({
        field: rule.field,
        label: rule.label,
        value: rule.defaultValue
      });
      pushAdvisoryIfNeeded(rule);
      continue;
    }

    const issue: ValidationIssue = {
      field: rule.field,
      label: rule.label,
      stage: rule.stage,
      segment: rule.segment,
      severity: rule.severity,
      value
    };

    if (rule.severity === 'recommended') {
      warnings.push(issue);
    } else {
      missing.push(issue);
    }
  }

  return {
    complete: missing.length === 0,
    missing,
    warnings,
    defaults,
    advisories,
    data: validatedData
  };
}
