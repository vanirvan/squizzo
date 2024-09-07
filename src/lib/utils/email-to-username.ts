export function emailToUsername(email: string | null): string {
  if (!email) return "";
  const [localPart] = email.split("@");
  return localPart.replace(/\./g, "-");
}
