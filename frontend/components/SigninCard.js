import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import AppButton from "./AppButton";
import AppText from "./AppText";
import { globalStyles } from "../styles/global";
import httpURL from "../services/httpService";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../styles/styles.config";
import { UserContext, SignupContext } from "../context/UserContext";
import SigninCardHeader from "./SigninCardHeader";

const SigninCard = () => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useContext(UserContext);
  const { signup, setSignup } = useContext(SignupContext);

  const onSubmit = async (info, e) => {
    e.preventDefault();
    if (signup) {
      info.username = signup.email;
    }

    try {
      const { data } = await httpURL.post("/auth/login", { ...info });
      console.log(data);
      setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={globalStyles.formContainer}>
      {signup ? (
        <SigninCardHeader heading={signup.name} />
      ) : (
        <View style={globalStyles.formInputGroup}>
          <Pressable style={globalStyles.formTextInputContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="כתובת מייל"
                  style={globalStyles.formTextInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize='none'
                />
              )}
              name="username"
            />
          </Pressable>
          {errors.username && <AppText error>This is required.</AppText>}
        </View>
      )}

      <View style={globalStyles.formInputGroup}>
        <Pressable style={globalStyles.formTextInputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="סיסמא"
                style={globalStyles.formTextInput}
                secureTextEntry={isSecureEntry}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textContentType="password"

              />
            )}
            name="password"
          />
          <TouchableOpacity onPress={() => setIsSecureEntry((prev) => !prev)}>
            <FontAwesome5
              name={isSecureEntry ? "eye" : "eye-slash"}
              size={20}
              color={COLORS.grey}
              style={globalStyles.secondaryIcon}
            />
          </TouchableOpacity>
        </Pressable>
        {errors.password && <AppText error>This is required.</AppText>}
      </View>

      <AppButton onPress={handleSubmit(onSubmit)}>כניסה</AppButton>
      
    </KeyboardAvoidingView>
  );
};

export default SigninCard;
