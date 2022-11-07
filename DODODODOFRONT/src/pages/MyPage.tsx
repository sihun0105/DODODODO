import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import ProfileTopArea from '../components/ProfileTopArea';
import {RootStackParamList} from '../../AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
const MyPage = ({navigation}: SignInScreenProps) => {
  const userinfo = useSelector((state: RootState) => state.user);
  console.log(userinfo);
  return (
    <SafeAreaView>
      <ProfileTopArea email={userinfo.email} userImg={''} />
    </SafeAreaView>
  );
};

export default MyPage;
const styles = StyleSheet.create({});
