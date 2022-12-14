import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './src/pages/HomeStack';
import Setting from './src/pages/Setting';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors} from './src/public/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import useSocket from './src/hook/useSocket';
import ChoiceDate from './src/pages/ChoiceDate';
import Todo_detail from './src/pages/Todo_detail';
import ChatSpace from './src/pages/ChatSpace';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type LoggedInParamList = {
  Setting: undefined;
  HomeStack: undefined;
  ChoiceDate: undefined;
  ChatRoom: undefined;
  ChatSpace: {
    ReceiverId: number;
  };
  Todo_Detail: {
    StartDate: string;
    EndDate: string;
  };
  Profile: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const AppInner = () => {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);

  return isLoggedIn ? (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.main,
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: '설정',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ChoiceDate"
        component={ChoiceDate}
        options={{
          headerTitle: '날짜선택',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Todo_Detail"
        component={Todo_detail}
        options={{
          headerTitle: 'Todo_Detail',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ChatSpace"
        component={ChatSpace}
        options={{
          headerTitle: '채팅방',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.main,
        },
        headerTitleStyle: {
          color: '#fff',
        },
      }}>
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
};

export default AppInner;
