export function isXmlName(value: string): boolean {
  if (typeof value !== 'string') throw new TypeError('Expected name text');
  return /^[A-Za-z_][A-Za-z0-9_.-]*$/u.test(value);
}
