import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import React from 'react';
import Todo_container from '../components/Todo_container';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../public/globalStyles';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons_Icon from 'react-native-vector-icons/Ionicons';
import Setting from './Setting';
import Main from './Main';
import MyPage from './MyPage';
import ChatSpace from './ChatSpace';
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.main,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Ionicons_Icon name="home" size={35}></Ionicons_Icon>
          ),
          title: '메인',
        }}
      />
      <Tab.Screen
        name="ChatSpace"
        component={ChatSpace}
        options={{
          tabBarIcon: () => (
            <Ionicons_Icon name="chatbubbles" size={35}></Ionicons_Icon>
          ),
          title: '채팅',
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarIcon: () => (
            <Ionicons_Icon name="ios-person" size={35}></Ionicons_Icon>
          ),
          title: '마이페이지',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <Ionicons_Icon name="settings" size={35}></Ionicons_Icon>
          ),
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
