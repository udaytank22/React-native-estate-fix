import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../CustomHook/CustomHooks';
import SplashScreen from '../Screens/Splash/Splash';
// import { useAuth } from '../CustomHooks/CustomHooks';
// import SplashScreen from '../screens/Splash/Splash';

const AppNav = () => {
  const { userToken } = useAuth();
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // Hide splash after 3 sec
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);
  return (
    <NavigationContainer>
      {isSplashVisible ? (
        <SplashScreen />
      ) : userToken ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppNav;
