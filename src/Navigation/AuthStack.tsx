import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Authentication/Login';
import OtpVerify from '../Screens/Authentication/OtpVerify';
import Register from '../Screens/Authentication/Register';

const stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="OtpVerify"
          component={OtpVerify}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </>
  );
};

export default AuthStack;
