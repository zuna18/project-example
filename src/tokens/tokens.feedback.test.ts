import { describe, it, expect } from 'vitest';
import { colorTokens } from './tokens';

describe('feedback tokens', () => {
  it('define error, warning and success', () => {
    expect(colorTokens.error).toBe('#d32f2f');
    expect(colorTokens.warning).toBe('#ed6c02');
    expect(colorTokens.success).toBe('#2e7d32');
  });

  it('uses hexadecimal format', () => {
    expect(colorTokens.error).toMatch(/^#[0-9a-f]{6}$/i);
    expect(colorTokens.warning).toMatch(/^#[0-9a-f]{6}$/i);
    expect(colorTokens.success).toMatch(/^#[0-9a-f]{6}$/i);
  });
});
