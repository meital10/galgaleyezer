import React, { createContext, useEffect, useState } from 'react';
import { I18nManager, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import httpURL from './services/httpService';
import { UserContext, SignupContext } from './context/UserContext';
import { GoalContext } from './context/GoalContext';
import AppText from './components/AppText';
import { COLORS } from './styles/styles.config';
import ImageUploadScreen from './screens/ImageUploadScreen';
import Winners from './screens/Winners';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './db/firebaseConfig';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

const Stack = createNativeStackNavigator();

const App = () => {
  initializeApp(firebaseConfig);
  const [user, setUser] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded] = useFonts({
    VarelaRound: require('./assets/fonts/VarelaRound-Regular.ttf'),
  });

  const signOut = async () => {
    try {
      const res = await httpURL.get('/auth/logout');
      if (res) {
        setUser(() => res.data);
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  useEffect(() => {
    const currentUser = async () => {
      try {
        const res = await httpURL.get('/auth/currentUser');
        if (res) {
          setUser(() => res.data.user);
        }
      } catch (error) {
        console.log('err', error);
        setUser(() => null);
      }
    };
    currentUser();
    setAppIsReady(true);
  }, []);

  function LeftHeader() {
    const fontSize = 17;
    return (
      <>
        <AppText size={fontSize}>שלום {user?.firstName} | </AppText>
        <AppText size={fontSize} onPress={signOut} color="#444">
          התנתק
        </AppText>
      </>
    );
  }

  if (!appIsReady || !loaded) {
    return <AppLoading />;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={!user ? 'Login' : 'UploadImage'}>
          {!user ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Group
              screenOptions={{
                headerShadowVisible: false,
                headerStyle: { backgroundColor: COLORS.yellow },
                headerTitleStyle: { color: 'transparent' },
                title: 'HIDEN',
                headerLeft: LeftHeader,
                headerRight: () => (
                  <Image
                    source={require('./assets/images/logo.png')}
                    style={{ resizeMode: 'contain', width: 50, height: 50 }}
                  />
                ),
                headerBackVisible: true,
              }}
            >
              <Stack.Screen name="UploadImage" component={ImageUploadScreen} />
              <Stack.Screen name="Winners" component={Winners} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
