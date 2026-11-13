export const colorTokens = {
  primary: '#1976d2',
  secondary: '#9c27b0',
  accent: '#ff9800',
  error: '#d32f2f',
  warning: '#ed6c02',
  success: '#2e7d32',
} as const;

export type ColorToken = keyof typeof colorTokens;
