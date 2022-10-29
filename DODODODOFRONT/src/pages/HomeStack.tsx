import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import React from 'react';
import Todo_container from '../components/Todo_container';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Color_main} from '../public/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Setting from './Setting';
import Main from './Main';
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color_main,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => <Icon name="phone" size={35}></Icon>,
          title: '메인',
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
  );
};

export default HomeStack;
const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
