import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

export function enterPin(existingPin: string) {
  Alert.prompt(
    "Enter PIN",
    "Enter 4 digit code",
    async (pin) => {
      if (pin === existingPin) {
        Alert.alert("✅ Enter successful!");
      } else {
        Alert.alert("❌ Wrong PIN");
      }
    },
    "secure-text"
  );
}

export function createPin() {
  Alert.prompt(
    "Create PIN",
    "Enter 4 digit code:",
    async (pin) => {
      if (pin && pin.length === 4) {
        await SecureStore.setItemAsync("user_pin", pin);
        Alert.alert("✅ PIN created successfully!");
      } else {
        Alert.alert("❌ PIN must be 4 characters");
      }
    },
    "secure-text"
  );
}
