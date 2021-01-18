export default function createLoginUrl(redirectTo?: string): string {
  console.log("CREATE LOGIN URL");
  if (redirectTo) {
    return `/api/login?redirectTo=${encodeURIComponent(redirectTo)}`;
  }
  return `/api/login`;
}
