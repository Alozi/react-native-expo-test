import login from "@/api/authApi";
import { createPin, enterPin } from "@/api/pin";
import LoginData from "@/types/login";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Ellipse, Path } from "react-native-svg";
import * as Yup from "yup";
import ErrorMessage from "./form/ErrorMessage";
import SignButton from "./form/SignButton";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  password: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Password is required"),
});

// Biometric Auth
const handleBiometricAuth = async () => {
  try {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Please, use Face ID / Touch ID",
    });
    if (result.success) {
      Alert.alert("Biometric authentication successful ✅");
    } else {
      Alert.alert("Biometric authentication unsuccessful ❌");
    }
  } catch (error) {
    console.error(error);
  }
};

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const existingPin = await SecureStore.getItemAsync("user_pin");

      console.log(existingPin);

      if (existingPin) {
        enterPin(existingPin);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = async (values: LoginData) => {
    console.log("login");

    try {
      setError("");
      const data = await login(values);
      console.log("✅ Logged in:", data);

      createPin();

      // handleBiometricAuth();
    } catch (error: unknown) {
      if (error.response?.status === 400) {
        setError("Incorrect username or password");
      } else {
        setError("Something went wrong, please try again later");
      }
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Svg width="49" height="53" viewBox="0 0 49 53" fill="none">
          <Ellipse
            cx="24.5"
            cy="26.3278"
            rx="24"
            ry="25.8278"
            fill="#F2FAF7"
            stroke="#E9F7F2"
          />
          <Path
            d="M15.5 34.9371L15.6354 34.0003C15.8096 32.7954 16.5074 31.7197 17.6289 31.2463C18.934 30.6953 20.8468 30.0806 22.8846 30.0806C24.9224 30.0806 26.8352 30.6953 28.1403 31.2463C29.2618 31.7197 29.9597 32.7954 30.1338 34.0003L30.2692 34.9371"
            stroke="#00A385"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M31.7036 23.8195V28.1349"
            stroke="#00A385"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M33.7497 25.977H29.6597"
            stroke="#00A385"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M22.8848 26.5485C25.1506 26.5485 26.9874 24.5719 26.9874 22.1335C26.9874 19.6952 25.1506 17.7185 22.8848 17.7185C20.619 17.7185 18.7822 19.6952 18.7822 22.1335C18.7822 24.5719 20.619 26.5485 22.8848 26.5485Z"
            stroke="#00A385"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Personal Account</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.item}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Please, enter name."
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
              />
              {touched.name && errors.name && (
                <ErrorMessage>{errors.name}</ErrorMessage>
              )}
            </View>
            <View style={styles.item}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Please, enter password."
                keyboardType="visible-password"
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              {touched.password && errors.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
            </View>
            {error && <ErrorMessage isAligncenter={true}>{error}</ErrorMessage>}
            <SignButton
              title="Continue"
              isValid={isValid}
              handleSubmit={handleSubmit}
            />
            <TouchableOpacity
              style={styles.link}
              onPress={() => router.navigate("/SignUpPage")}
            >
              <Text style={styles.linkText}>Create Account</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    marginBlock: 17,
    marginInline: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    color: "#06070A",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
  },
  subtitle: {
    color: "#606773",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 16,
    letterSpacing: 0,
  },
  divider: {
    width: "100%",
    borderColor: "#EBEFF5",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  item: {
    marginInline: 16,
    marginBottom: 24,
  },
  inputLabel: {
    color: "#606773",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
    marginLeft: 16,
    marginBottom: 8,
  },
  input: {
    color: "#06070A",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 16,
    letterSpacing: 0,
    borderColor: "#CED5E0",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    textAlignVertical: "center",
  },
  link: {
    marginTop: 4,
    marginInline: 16,
    borderRadius: 16,
    height: 48,
    paddingBlock: 12,
  },
  linkText: {
    color: "#FA8A34",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
  },
});
