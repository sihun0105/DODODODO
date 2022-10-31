import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useCallback} from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './src/pages/HomeStack';
import Setting from './src/pages/Setting';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors} from './src/public/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

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

const AppInner = ({navigation}: SignInScreenProps) => {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return isLoggedIn ? (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.main,
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={
          {
            //title: 'Home',
          }
        }
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.main,
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
