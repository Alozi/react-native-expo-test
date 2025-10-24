import { StyleSheet, Text } from "react-native";

export default function ErrorMessage({
  children,
  isAligncenter,
}: {
  children: string;
  isAligncenter?: boolean;
}) {
  return (
    <Text
      style={isAligncenter ? [styles.error, styles.errorMessage] : styles.error}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#FF0000",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    marginBlock: 4,
    marginInline: 16,
  },
  errorMessage: {
    textAlign: "center",
  },
});
