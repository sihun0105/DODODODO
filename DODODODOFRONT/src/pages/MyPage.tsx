import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
const MyPage = () => {
  const userinfo = useSelector((state: RootState) => state.user);
  console.log(userinfo);
  return (
    <View>
      <Text>{userinfo.nickname}</Text>
    </View>
  );
};

export default MyPage;
