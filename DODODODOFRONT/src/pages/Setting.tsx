import { View, Text,Alert,TouchableOpacity } from 'react-native'
import React,{useCallback} from 'react'
import Config from 'react-native-config';
import { useSelector,useDispatch } from 'react-redux';
import userSlice from '../slices/user';
import {RootState} from '../store/reducer';
import axios,{AxiosError} from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const Setting = () => {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const dispatch = useDispatch();

  const onLogout = useCallback(async () => {
    console.log('logout');
    try {
      await axios.post(
        `${Config.API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
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
  }, [accessToken, dispatch]);
  return (
    <View>
      <Text>Setting</Text>
      <TouchableOpacity onPress={onLogout}>
          <Text>로그아웃</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Setting