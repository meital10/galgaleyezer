import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles/styles.config";

const SigninCardHeader = ({ heading }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>{heading} שלום </Text>
      </View>
    </View>
  );
};

export default SigninCardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    height: 64,
  },
  header: {
    fontSize: 24,
    color: COLORS.black,
  },
});
