import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useCallback} from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Setting from './src/pages/Setting';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Color_main} from './src/public/colors';
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
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color_main,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={35}></Icon>,
          title: '메인',
          headerRight: () => (
            <Button
              onPress={() => console.log('This is a button!')}
              title="추가"
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => <Icon name="phone" size={35}></Icon>,
          title: '설정',
        }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color_main,
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
