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

export interface ValidationResult {
  complete: boolean;
  missing: ValidationIssue[];
  warnings: ValidationIssue[];
  defaults: AppliedDefault[];
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
    return normalized === '' || normalized === 'undefined' || normalized === 'null';
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

  for (const rule of rules) {
    if (rule.when && !rule.when(validatedData, context)) {
      continue;
    }

    const value = validatedData[rule.field];

    if (!isMissingValue(value)) {
      continue;
    }

    if (rule.severity === 'defaultable' && !isMissingValue(rule.defaultValue)) {
      validatedData[rule.field] = rule.defaultValue;
      defaults.push({
        field: rule.field,
        label: rule.label,
        value: rule.defaultValue
      });
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
    data: validatedData
  };
}
