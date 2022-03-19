import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
// import AppText from './../components/AppText';
// import { COLORS } from './../styles/styles.config';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from './../styles/styles.config';
// import httpURL from '../services/httpService';

const ImageUploadScreen = () => {
  const [profileImage, setProfileImage] = useState('');

  const pickImage = async () => {
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!response.cancelled) {
      console.log('asd');
      setProfileImage(response.uri);
    }
  };

  // const uploadProfileImage = async () => {
  //   const imageUri = profileImage.replace('file:/data', 'file:///data');
  //   const imageType = profileImage.split('.')[1];
  //   const formData = new FormData();
  //   formData.append('profile', {
  //     name: new Date() + '_profile',
  //     uri: imageUri,
  //     type: 'image/jpg',
  //   });
  //   // formData.append("profile", imageUri);
  //   console.log(formData);
  //   try {
  //     const res = await httpURL.post('/upload', formData, {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': `multipart/form-data;boundary=${formData}`,
  //       },
  //     });
  //     console.log('res', res);
  //   } catch (error) {
  //     console.log('error', error.message);
  //   }
  // };

  console.log('!@#!@#!@#', profileImage);

  return (
    <View style={styles.container}>
      <Text style={styles.uploadImageTxt}>העלאת תמונת פרופיל</Text>
      <View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <View>
              <View style={styles.verticalLine} />
              <View style={styles.horizontalLine} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  uploadImageTxt: {
    fontFamily: 'VarelaRound',
    fontSize: 18,
    paddingVertical: 0,
    color: COLORS.grey,
    textAlign: 'left',
    marginBottom: 16,
    width: 248,
  },
  uploadBtn: {
    height: 186,
    width: 186,
    borderRadius: 186 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9C9C9C',
    borderStyle: 'solid',
    borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  horizontalLine: {
    width: 44,
    height: 0,
    borderColor: '#8D8C90',
    borderWidth: 3,
  },
  verticalLine: {
    position: 'absolute',
    width: 45,
    borderColor: '#8D8C90',
    borderWidth: 3,
    transform: [{ rotate: '90deg' }],
  },
});
