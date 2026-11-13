import { describe, it, expect } from 'vitest';
import { colorTokens } from './tokens';

describe('brand tokens', () => {
  it('define secondary and accent', () => {
    expect(colorTokens.secondary).toBe('#9c27b0');
    expect(colorTokens.accent).toBe('#ff9800');
  });

  it('uses hexadecimal format', () => {
    expect(colorTokens.secondary).toMatch(/^#[0-9a-f]{6}$/i);
    expect(colorTokens.accent).toMatch(/^#[0-9a-f]{6}$/i);
  });
});
