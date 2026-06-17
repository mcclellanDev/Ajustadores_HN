import { Atenciones } from '../interfaces/atenciones';

export type AttentionStatusTone = 'active' | 'voided' | 'finished' | 'closed' | 'unknown';

export interface AttentionStatusView {
  label: string;
  detail?: string;
  badgeClass: string;
  stripColor: string;
  claimCode?: string;
  tone: AttentionStatusTone;
}

export function normalizeAttentionColor(color?: string): string {
  return (color || '').toLowerCase().trim();
}

export function getAttentionClaimCode(atencion: Partial<Atenciones> | null | undefined): string {
  return atencion?.CodigoReclamoFicohsa?.toString().trim() || '';
}

export function hasAttentionClaimCode(atencion: Partial<Atenciones> | null | undefined): boolean {
  return !!getAttentionClaimCode(atencion);
}

export function resolveAttentionStatus(atencion: Partial<Atenciones> | null | undefined): AttentionStatusView {
  const color = normalizeAttentionColor(atencion?.ColorEstado);
  const claimCode = getAttentionClaimCode(atencion);
  const backendLabel = atencion?.LbEstado?.toString().trim() || atencion?.Estado?.toString().trim() || '';

  if (color === 'green') {
    return {
      label: 'Activa',
      badgeClass: 'status-badge--active',
      stripColor: '#16a34a',
      tone: 'active'
    };
  }

  if (color === 'orange') {
    return {
      label: 'Anulada',
      detail: backendLabel || undefined,
      badgeClass: 'status-badge--voided',
      stripColor: '#f97316',
      tone: 'voided'
    };
  }

  if (color === 'red') {
    if (claimCode) {
      return {
        label: 'Finalizada',
        detail: `Reclamo BPM: ${claimCode}`,
        badgeClass: 'status-badge--finished',
        stripColor: '#0f766e',
        claimCode,
        tone: 'finished'
      };
    }

    return {
      label: backendLabel || 'Cancelada / Cerrada',
      badgeClass: 'status-badge--closed',
      stripColor: '#dc2626',
      tone: 'closed'
    };
  }

  return {
    label: backendLabel || 'Sin estado',
    detail: claimCode ? `Reclamo BPM: ${claimCode}` : undefined,
    badgeClass: 'status-badge--unknown',
    stripColor: color || '#7da1c4',
    claimCode: claimCode || undefined,
    tone: 'unknown'
  };
}

export function attentionNeedsClaimLookup(atencion: Partial<Atenciones>): boolean {
  return normalizeAttentionColor(atencion.ColorEstado) === 'red' && !hasAttentionClaimCode(atencion);
}
