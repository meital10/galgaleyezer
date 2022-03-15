import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./styles.config";

export const globalStyles = StyleSheet.create({
  formContainer: {
    width: 300,
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  formInputGroup: { marginBottom: 2 },
  formTextInputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    width: 248,
    borderBottomWidth: 2,
    borderColor: COLORS.grey,
  },
  formTextInput: {
    fontFamily: "VarelaRound",
    fontSize: 18,
    paddingVertical: 0,
    flex: 1,
    textAlign: "right",
    color: COLORS.grey,
  },
  secondaryIcon: { marginLeft: 15 },
});
