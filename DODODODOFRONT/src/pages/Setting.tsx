import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {useCallback} from 'react';
import Config from 'react-native-config';
import {useSelector, useDispatch} from 'react-redux';
import userSlice from '../slices/user';
import {RootState} from '../store/reducer';
import axios, {AxiosError} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {colors} from '../public/GlobalStyles';

const Setting = () => {
  // const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const dispatch = useDispatch();

  const onLogout = useCallback(async () => {
    console.log('logout');
    try {
      await axios.post(
        `${
          Platform.OS === 'ios' ? Config.IOS_API_URL : Config.ANDROID_API_URL
        }/users/logout`,
      );
      Alert.alert('알림', '로그아웃 되었습니다.');
      dispatch(
        userSlice.actions.setUser({
          name: '',
          email: '',
          accessToken: '',
        }),
      );
      await EncryptedStorage.removeItem('refreshToken');
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.error(errorResponse);
    }
  }, [dispatch]);
  return (
    <SafeAreaView>
      <View style={styles.logout_Button_Zone}>
        <TouchableOpacity onPress={onLogout} style={styles.logout_Button}>
          <Text style={styles.logout_Button_Text}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
const styles = StyleSheet.create({
  logout_Button: {
    width: 200,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout_Button_Zone: {
    alignItems: 'center',
    margin: 20,
  },
  logout_Button_Text: {
    color: 'white',
  },
});
