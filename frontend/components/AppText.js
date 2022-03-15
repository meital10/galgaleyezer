import React from "react";
import { StyleSheet, Text } from "react-native";

const AppText = ({ size, color, error, center, style, children, ...props }) => {
  return (
    <Text
      style={[
        styles.text,
        error ? { color: "#b50f04" } : {},
        size ? { fontSize: size } : {},
        center ? { textAlign: "center" } : {},
        color ? { color } : {},
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "VarelaRound",
  },
});
