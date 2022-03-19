import axios from 'axios';
import { API_URL } from '@env';
import { Alert } from 'react-native';

const httpURL = axios.create({
  baseURL: 'http://10.0.0.26:4000',
});

// httpURL.interceptors.response.use(null, (error) => {
//   const { response } = error.response;

//   if (!response) {
//     Alert.alert("שגיאת חיבור לשרת");
//   }
//   if (response && response.status >= 404) {
//     Alert.alert("חלה שגיאה");
//   }
//   return Promise.reject(error);
// });

export default httpURL;
