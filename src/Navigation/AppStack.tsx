import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBar from './BottomBar';

const stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <>
      <stack.Navigator>
        <stack.Screen
          name="bottomBar"
          component={BottomBar}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </>
  );
};

export default AppStack;
