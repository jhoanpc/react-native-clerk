import { Slot, Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file')
}
export default function RootLayout() {
  return (
    <ClerkProvider  publishableKey={publishableKey}>
      <ClerkLoaded>
        <Slot/>
      </ClerkLoaded>
      </ClerkProvider>
  );
}
