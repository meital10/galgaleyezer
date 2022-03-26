import React, { useRef, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Animated,
  Button,
} from "react-native";
import { UserContext, SignupContext } from "../context/UserContext";
import Logo from "../components/Logo";
import SigninCard from "../components/SigninCard";
import SignupCard from "../components/SignupCard";
import { COLORS } from "../styles/styles.config";
import LoginScreenSelector from "../components/LoginScreenSelector";
import AppButton from "../components/AppButton";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [user, setUser] = useState(null);
  const [signup, setSignup] = useState(null);
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();
  const navigation = useNavigation();
  const signupBorderBottomColor = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLORS.green, "transparent"],
  });

  const signinBorderBottomColor = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["transparent", COLORS.green],
  });

  const signupColor = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLORS.black, COLORS.grey],
  });

  const signinColor = animation.interpolate({
    inputRange: [0, width],
    outputRange: [COLORS.grey, COLORS.black],
  });

  return (
    <SignupContext.Provider value={{ signup, setSignup }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Logo />
        <View style={styles.selectorContainer}>
          <LoginScreenSelector
            onPress={() => scrollView.current.scrollTo({ x: width })}
            borderBottomColor={signinBorderBottomColor}
            color={signinColor}
            title="התחברות"
          />
          <View style={styles.selectorDivider} />
          <LoginScreenSelector
            onPress={() => scrollView.current.scrollTo({ x: 0 })}
            borderBottomColor={signupBorderBottomColor}
            color={signupColor}
            title="הרשמה"
          />
        </View>
        <ScrollView
          ref={scrollView}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: animation } } }],
            { useNativeDriver: false }
          )}
        >
          <SigninCard />
          <SignupCard />
        </ScrollView>
      </ScrollView>
    </SignupContext.Provider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 50,
  },
  selectorContainer: {
    marginTop: 50,
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  selectorDivider: {
    borderRightWidth: 2,
    borderColor: COLORS.green,
    height: 20,
  },
});
