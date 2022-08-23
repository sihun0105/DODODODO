import { View, Text,SafeAreaView } from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './src/store/reducer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Setting from './src/pages/Setting';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const AppInner = () => {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  return isLoggedIn?(
      <Tab.Navigator>
        <Tab.Screen
        name='Home'
        component={Home}
        />
        <Tab.Screen
        name='Setting'
        component={Setting}
        />
      </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: '로그인'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: '회원가입'}}
      />
    </Stack.Navigator>
  );
}

export default AppInner