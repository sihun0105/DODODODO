import { View, Text,SafeAreaView } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Setting from './src/pages/Setting';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppInner = () => {
  return (
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
  )
}

export default AppInner