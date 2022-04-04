import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import { useContext, useState } from "react/cjs/react.production.min";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import MyGoal from "../components/MyGoal";
import { GoalContext } from "../context/GoalContext";
import { UserContext } from "../context/UserContext";
import { COLORS, MEASUREMENTS } from "../styles/styles.config";
import httpURL from "../services/httpService";
import { useNavigation } from "@react-navigation/core";

const SetGoalScreen = () => {
  const { user } = useContext(UserContext);
  const { goal } = useContext(GoalContext);
  const { setGoal } = useContext(GoalContext);
  const [goalTitle, setGoalTitle] = useState(goal?.title || "");

  const navigation = useNavigation();

  // add an object
  const handleSubmit = async (e, user, myGoal) => {
    e.preventDefault();
    try {
      const data = await httpURL.post("/galgaleyezer/add-goal", {
        // student: user,
        myGoal: goalTitle,
      });

      console.log(data);
    } catch (err) {
      console.log("err goal saving", err.message);
    }

    navigation.navigate("GoalModal");
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.titleName}> שלום {user.firstName}</AppText>

      <AppText size={20}>
        הגיע השלב בו צריך להגדיר את המטרה שתלווה אותך במהלך הסדנה
      </AppText>
      <View>
        <AppText size={20} style={styles.myGoalTitle}>
          המטרה שלי
        </AppText>
        <TextInput />

        <TextInput
          value={goalTitle}
          onChangeText={setGoalTitle}
          style={styles.textInput}
          minLength={2}
          maxLength={20}
          // onBlur
        />
        <AppButton onPress={handleSubmit} style={styles.button}>
          {/* onPress={()=>handleSubmit()} */}
          שמירה
        </AppButton>

        {/* add an alert */}
      </View>
    </View>
  );
};

export default SetGoalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 95,
    paddingHorizontal: 50,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
  },
  titleName: {
    marginBottom: 50,
    fontSize: 25,
  },
  myGoalTitle: {
    marginTop: 40,
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: MEASUREMENTS.borderRadius,
    marginTop: 7,
    marginBottom: 50,
    paddingHorizontal: 22 * 0.8,
    paddingVertical: 22 * 0.8,
    fontSize: 22,
    width: 290,
    textAlign: "center",
  },
  button: {
    marginTop: 100,
    width: 270,
  },
});
