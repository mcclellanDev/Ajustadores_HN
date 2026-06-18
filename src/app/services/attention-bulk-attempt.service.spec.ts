import { AttentionBulkAttemptService } from './attention-bulk-attempt.service';

describe('AttentionBulkAttemptService', () => {
  let service: AttentionBulkAttemptService;

  beforeEach(() => {
    service = new AttentionBulkAttemptService();
    (service as any).cache = {};
  });

  it('increments attempt count on each bulk start', async () => {
    const first = await service.recordAttemptStart(12345);
    const second = await service.recordAttemptStart(12345);

    expect(first.attemptCount).toBe(1);
    expect(second.attemptCount).toBe(2);
  });

  it('marks pending failure and keeps attempt history', async () => {
    await service.recordAttemptStart(777);
    const failed = await service.recordFailure(777, 'BPM rechazado');

    expect(failed.pendingFailure).toBe(true);
    expect(failed.failureCount).toBe(1);
    expect(failed.attemptCount).toBe(1);
    expect(failed.lastError).toBe('BPM rechazado');
  });

  it('clears pending failure after a successful bulk', async () => {
    await service.recordAttemptStart(888);
    await service.recordFailure(888, 'Timeout');
    const success = await service.recordSuccess(888);

    expect(success.pendingFailure).toBe(false);
    expect(success.failureCount).toBe(1);
    expect(success.lastError).toBeUndefined();
  });

  it('builds attempt labels for the UI', () => {
    expect(service.getAttemptLabel({ idAtencion: 1, attemptCount: 1, failureCount: 0, lastAttemptAt: '', pendingFailure: false })).toBe('1 intento');
    expect(service.getAttemptLabel({ idAtencion: 1, attemptCount: 3, failureCount: 2, lastAttemptAt: '', pendingFailure: true })).toBe('3 intentos');
  });
});
