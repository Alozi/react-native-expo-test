import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FA8A34",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="SignInPage" options={{ title: "Sign In" }} />
      <Stack.Screen name="SignUpPage" options={{ title: "Sign Up" }} />
      <Stack.Screen name="profile" options={{ title: "Profile folder" }} />
    </Stack>
  );
}
