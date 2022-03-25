import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { COLORS, MEASUREMENTS } from "../styles/styles.config";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

export const GoalModal = () => {
  const navigation = useNavigation();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigation.navigate("SubGoalCard");
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText style={styles.modalText}>
              מי שיש לו ,'למה' שלמענו יחיה, הוא יוכל לשאת כמעט כל איך. פרידריך
              ניטשה
            </AppText>
            <AppButton onPress={handleSubmit}>
              <Text style={styles.textStyle}>לצאת אל הדרך</Text>
            </AppButton>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default GoalModal;
