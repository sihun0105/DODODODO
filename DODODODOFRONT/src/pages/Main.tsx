import {View, Text, Button, Platform} from 'react-native';
import React, {useCallback} from 'react';
import ChoiceDate from './ChoiceDate';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import {LoggedInParamList} from '../../AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type MainScreenProps = NativeStackScreenProps<LoggedInParamList, 'HomeStack'>;
const Main = ({navigation}: MainScreenProps) => {
  const title = 'title';
  const content = 'test content';
  const startDate = '2022-11-08';
  const endDate = '2022-11-08'; // ChoiceDate에서 넘기게 수정해야함.

  const toChoiceDate = useCallback(() => {
    navigation.navigate('ChoiceDate');
  }, [navigation]);

  return (
    <View>
      <Button
        title="MAKE schedule gogogo"
        onPress={() => {
          toChoiceDate();
          // const response = axios.post(
          //   `${
          //     Platform.OS === 'ios'
          //       ? Config.IOS_API_URL
          //       : Config.ANDROID_API_URL
          //   }/todo/create`,
          //   {
          //     title,
          //     content,
          //     startDate,
          //     endDate,
          //   },
          // );
        }}></Button>
    </View>
  );
};

export default Main;
