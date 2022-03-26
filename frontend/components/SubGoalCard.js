import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import AppText from "./AppText";
import AppButton from "./AppButton";
import { COLORS, MEASUREMENTS } from "../styles/styles.config";
import { SubgoalContext } from "../context/GoalContext";
import { useNavigation } from "@react-navigation/core";

const SubGoalCard = () => {
  const { subgoal, setSubgoal } = useContext(SubgoalContext);
  const navigation = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // post request

    Alert.alert(
      "כל הכבוד!",
      "כל מסלול מתחיל בצעד קטן, תודה שחלקת איתנו את שלך",
      "נתראה בצעד הבא",
      [
        {
          text: "x",
          onPress: () => console.log("alert closed"),
        },
      ]
    );

    navigation.navigate("Winners");
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}> הוספת יעד שבועי</AppText>

      <AppText size={14} style={styles.subTitle}>
        על מנת להשיג את המטרה בכל שבוע נציב יעד בו נתמקד
      </AppText>

      <View>
        <AppText size={18}>היעד השבועי שלי</AppText>

        <AppText color="#666">שבוע</AppText>
      </View>

      <View style={styles.subGoalInput}>
        <TextInput value={subgoal} onChangeText={setSubgoal} />
      </View>

      <View>
        <AppText>מה עשיתי השבוע אל עבר היעד שלי</AppText>
      </View>
      <View style={styles.actionInput}>
        <TextInput />
      </View>

      <AppButton onPress={handleSubmit}>שמירה</AppButton>
    </View>
  );
};

export default SubGoalCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 95,
    paddingHorizontal: 50,
    alignItems: "center",
  },

  title: {
    marginBottom: 50,
    fontSize: 25,
  },

  subTitle: {
    alignItems: "center",
  },

  subGoalInput: {
    paddingHorizontal: 12,
    paddingVertical: 25,
    marginBottom: 17,
    backgroundColor: COLORS.lightYellow,
    borderRadius: MEASUREMENTS.borderRadius,
    width: 300,
  },

  actionInput: {
    paddingHorizontal: 50,
    paddingVertical: 80,
    marginBottom: 17,
    backgroundColor: COLORS.lightYellow,
    borderRadius: MEASUREMENTS.borderRadius,
    width: 300,
  },
});
