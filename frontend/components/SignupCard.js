import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AppButton from './AppButton';
import AppText from './AppText';
import httpURL from '../services/httpService';
import { globalStyles } from '../styles/global';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../styles/styles.config';
import { SignupContext } from '../context/UserContext';
import ImageUploadScreen from '../screens/ImageUploadScreen';

const SignupCard = () => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const { signup, setSignup } = useContext(SignupContext);

  const onSubmit = async (info, e) => {
    e.preventDefault();
    console.log('@@@@', info);

    try {
      const { data } = await httpURL.post('/auth/signup', { ...info });
      setSignup(data);
    } catch ({ response }) {
      console.log('a', response.data, response.status);
      if (response && response.status === 400) {
        setError('userExists', {
          type: 'userExists',
          message: 'המשתמש כבר קיים',
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={globalStyles.formContainer}>
      <View style={globalStyles.formInputGroup}>
        <Pressable style={globalStyles.formTextInputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="שם פרטי"
                style={globalStyles.formTextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                textContentType="name"
              />
            )}
            name="firstName"
          />
        </Pressable>
        {errors.firstName && <AppText error>This is required.</AppText>}
      </View>

      <View style={globalStyles.formInputGroup}>
        <Pressable style={globalStyles.formTextInputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="שם משפחה"
                style={globalStyles.formTextInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textContentType="familyName"
              />
            )}
            name="lastName"
          />
        </Pressable>
        {errors.lastName && <AppText error>This is required.</AppText>}
      </View>

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
              />
            )}
            name="email"
          />
        </Pressable>
        {errors.email && <AppText error>This is required.</AppText>}
        {/* {errors.userExists && <AppText error>{errors.userExists}</AppText>} */}
      </View>

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
              name={isSecureEntry ? 'eye' : 'eye-slash'}
              size={20}
              color={COLORS.grey}
              style={globalStyles.secondaryIcon}
            />
          </TouchableOpacity>
        </Pressable>
        {errors.password && <AppText error>This is required.</AppText>}
      </View>

      <ImageUploadScreen />

      <AppButton onPress={handleSubmit(onSubmit)}>סיימתי!</AppButton>
    </KeyboardAvoidingView>
  );
};

export default SignupCard;
