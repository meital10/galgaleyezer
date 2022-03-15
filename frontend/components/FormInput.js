import React from "react";
import { TextInput } from "react-native";
import { globalStyles } from "./../styles/global";

const FormInput = ({ children, placeholder }) => {
  return (
    <TextInput
      style={globalStyles.formTextInput}
      placeholder={placeholder}
      {...children}
    />
  );
};

export default FormInput;
