import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      {/* <SignUp /> */}

      <View>
        <Link href="/" style={styles.buttonSignIn}>
          <Link.Trigger>
            <Text>Sign In</Text>
          </Link.Trigger>
        </Link>

        <Link href="/modal" style={styles.buttonSignUp}>
          <Link.Trigger>
            <Text>Sign up</Text>
          </Link.Trigger>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBlockColor: "red",
    borderWidth: 1,
    flex: 1,
    justifyContent: "space-between",
  },
  buttonSignIn: {
    marginBlock: 20,
    marginInline: 16,
    color: "#FA8A34",
    borderRadius: 16,
    height: 48,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
    paddingBlock: 12,
  },
  buttonSignUp: {
    marginBottom: 40,
    marginInline: 16,
    backgroundColor: "#FA8A34",
    borderRadius: 16,
    height: 48,
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
    paddingBlock: 12,
  },
});
