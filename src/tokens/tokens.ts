export const colorTokens = {
  primary: '#1976d2',
  secondary: '#9c27b0',
  accent: '#ff9800',
} as const;

export type ColorToken = keyof typeof colorTokens;
