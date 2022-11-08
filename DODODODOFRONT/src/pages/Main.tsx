import {View, Text, Button} from 'react-native';
import React from 'react';
import ChoiceDate from './ChoiceDate';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
const Main = () => {
  const title = 'title';
  const content = 'test content';
  const startDate = '2022-11-08';
  const endDate = '2022-11-08';
  return (
    <View>
      <Text>Main</Text>
      <Button
        title="button gogogo"
        onPress={() => {
          const response = axios.post(`${Config.IOS_API_URL}/todo/create`, {
            title,
            content,
            startDate,
            endDate,
          });
        }}></Button>
    </View>
  );
};

export default Main;
