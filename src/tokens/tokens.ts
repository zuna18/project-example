export const colorTokens = {
  primary: '#1976d2',
  // TODO(tokens): agregar más colores aquí
} as const;

export type ColorToken = keyof typeof colorTokens;
