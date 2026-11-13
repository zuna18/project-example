import { describe, it, expect } from 'vitest';
import { colorTokens } from './tokens';

describe('colorTokens', () => {
  it('define el color primary', () => {
    expect(colorTokens.primary).toBe('#1976d2');
  });
});
