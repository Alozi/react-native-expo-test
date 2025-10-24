import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native!</Text>

      <View>
        <TouchableOpacity
          style={styles.buttonSignIn}
          onPress={() => router.navigate("/SignInPage")}
        >
          <Text style={styles.buttonSignInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => router.navigate("/SignUpPage")}
        >
          <Text style={styles.buttonSignUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    color: "#06070A",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
    marginBlock: 17,
    marginInline: 16,
  },
  buttonSignIn: {
    marginBlock: 20,
    marginInline: 16,
    borderRadius: 16,
    height: 48,
    paddingBlock: 12,
  },
  buttonSignInText: {
    color: "#FA8A34",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
  },
  buttonSignUp: {
    marginBottom: 40,
    marginInline: 16,
    backgroundColor: "#FA8A34",
    borderRadius: 16,
    height: 48,

    paddingBlock: 12,
  },
  buttonSignUpText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
  },
});
