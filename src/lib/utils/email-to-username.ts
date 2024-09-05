export function emailToUsername(email: string): string {
  const [localPart] = email.split("@");
  return localPart.replace(/\./g, "-");
}
