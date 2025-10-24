import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({
  title,
  isValid,
  handleSubmit,
}: {
  title: string;
  isValid: boolean;
  handleSubmit: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, !isValid && styles.buttonDisabled]}
      onPress={() => handleSubmit()}
      disabled={!isValid}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    marginInline: 16,
    backgroundColor: "#FA8A34",
    borderRadius: 16,
    height: 48,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
    paddingBlock: 12,
  },
});
