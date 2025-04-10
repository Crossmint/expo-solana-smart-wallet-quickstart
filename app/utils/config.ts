export const walletApiKey = process.env
  .EXPO_PUBLIC_CLIENT_WALLET_API_KEY as string;

export const appId = process.env.EXPO_PUBLIC_CROSSMINT_APP_ID as string;

// TODO: replace when auth is ready
export const jwt = process.env.EXPO_PUBLIC_JWT as string;

export const usdcDevnetTokenMint =
  "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";

if (!walletApiKey) {
  throw new Error("EXPO_PUBLIC_CLIENT_WALLET_API_KEY is not set");
}

if (!appId) {
  throw new Error("EXPO_PUBLIC_CROSSMINT_APP_ID is not set");
}
