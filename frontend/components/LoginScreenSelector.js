import React from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { COLORS } from "../styles/styles.config";
import AppText from "./AppText";

const LoginScreenSelector = ({
  title,
  style,
  borderBottomColor,
  color,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Animated.Text
          style={[styles.title, style, { borderBottomColor }, { color }]}
        >
          {title}
        </Animated.Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreenSelector;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    fontFamily: "VarelaRound",
  },
});
