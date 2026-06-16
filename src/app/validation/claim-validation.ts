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
