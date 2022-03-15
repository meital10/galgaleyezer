import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import AppText from "./../components/AppText";
import { COLORS } from "./../styles/styles.config";
import * as ImagePicker from "expo-image-picker";
import httpURL from "../services/httpService";

const ImageUploadScreen = () => {
  const [profileImage, setProfileImage] = useState("");

  const pickImage = async () => {
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!response.cancelled) {
      setProfileImage(response.uri);
    }
  };

  const uploadProfileImage = async () => {
    const imageUri = profileImage.replace("file:/data", "file:///data");
    const imageType = profileImage.split(".")[1];
    const formData = new FormData();
    formData.append("profile", {
      name: new Date() + "_profile",
      uri: imageUri,
      type: "image/jpg",
    });
    // formData.append("profile", imageUri);
    console.log(formData);
    try {
      const res = await httpURL.post("/upload", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": `multipart/form-data;boundary=${formData}`,
        },
      });
      console.log("res", res);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <AppText
              size={16}
              center
              color={COLORS.grey}
              style={styles.uploadBtnText}
            >
              Upload Profile Image
            </AppText>
          )}
        </TouchableOpacity>
        <AppText size={16} color={COLORS.grey} center style={styles.skip}>
          Skip
        </AppText>
        {profileImage ? (
          <AppText
            onPress={uploadProfileImage}
            size={16}
            color={COLORS.grey}
            center
            style={styles.skip}
          >
            Upload
          </AppText>
        ) : null}
      </View>
    </View>
  );
};

export default ImageUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtn: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    overflow: "hidden",
  },
  uploadBtnText: { fontWeight: "bold" },
  skip: {
    padding: 10,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
