import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Logo = ({ height = 200, style }) => {
  return (
    <Image
      source={require("../assets/images/logo.png")}
      style={[styles.logo, { height }, style]}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
  },
});
