import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import AppText from "../components/AppText";
import Logo from "../components/Logo";
import SigninCard from "../components/SigninCard";
import SignupCard from "../components/SignupCard";
import { COLORS } from "../styles/styles.config";

const LoginScreen = () => {
  const [activeCard, setActiveCard] = useState("signin");

  const NavLink = ({ label, value }) => (
    <TouchableOpacity onPress={() => setActiveCard(value)}>
      <AppText
        style={[
          styles.navLink,
          value === activeCard ? styles.activeNavLink : {},
        ]}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />
      <View style={styles.navbar}>
        <NavLink label="התחברות" value="signin" />
        <View style={styles.navLinkDivider} />
        <NavLink label="הרשמה" value="signup" />
      </View>

      {activeCard === "signin" ? <SigninCard /> : <SignupCard />}
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 50,
  },
  navbar: {
    marginTop: 50,
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  navLink: {
    color: COLORS.grey,
    fontSize: 20,
    marginHorizontal: 10,
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeNavLink: {
    color: COLORS.black,
    borderColor: COLORS.green,
  },
  navLinkDivider: {
    borderRightWidth: 2,
    borderColor: COLORS.green,
    height: 20,
  },
});
