import {View, Text, Button, Platform} from 'react-native';
import React from 'react';
import ChoiceDate from './ChoiceDate';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
const Main = () => {
  const title = 'title';
  const content = 'test content';
  const startDate = '2022-11-08';
  const endDate = '2022-11-08'; // ChoiceDate에서 넘기게 수정해야함.
  return (
    <View>
      <Text>Main</Text>
      <Button
        title="MAKE schedule gogogo"
        onPress={() => {
          const response = axios.post(
            `${
              Platform.OS === 'ios'
                ? Config.IOS_API_URL
                : Config.ANDROID_API_URL
            }/todo/create`,
            {
              title,
              content,
              startDate,
              endDate,
            },
          );
        }}></Button>
    </View>
  );
};

export default Main;
