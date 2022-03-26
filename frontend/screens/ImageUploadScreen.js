import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { COLORS } from './../styles/styles.config';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ImageUploadScreen = ({
  image,
  setImage,
  uploadImage,
  setUploadImage,
}) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });

    if (result.cancelled) return;

    try {
      setUploadImage(true);
      const storage = getStorage();
      const imageRef = ref(storage, uuid.v4());

      const img = await fetch(result.uri);
      const bytes = await img.blob();

      await uploadBytes(imageRef, bytes);
      const avatarImg = await getDownloadURL(imageRef);
      setUploadImage(false);
      setImage(avatarImg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.uploadImageTxt}>העלאת תמונת פרופיל</Text>
      <View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : uploadImage ? (
            <ActivityIndicator size="large" />
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
