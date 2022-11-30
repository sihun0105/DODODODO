import {View, Text, Platform, TextInput, StyleSheet} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {LoggedInParamList} from '../../AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import axios from 'axios';
import Config from 'react-native-config';

type MainScreenProps = NativeStackScreenProps<LoggedInParamList, 'HomeStack'>;
const Todo_detail = ({navigation}: MainScreenProps) => {
  const route = useRoute<RouteProp<LoggedInParamList>>();
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const [startDate, setstartDate] = useState(route.params?.StartDate);
  const [endDate, setendDdate] = useState(route.params?.EndDate);
  const titleRef = useRef<TextInput | null>(null);
  const contentRef = useRef<TextInput | null>(null);
  const onChangetitle = useCallback(
    (text: string) => {
      settitle(text);
    },
    [title],
  );
  const onChangecontent = useCallback(
    (text: string) => {
      setcontent(text);
    },
    [content],
  );
  const goMain = useCallback(() => {
    navigation.navigate('HomeStack');
  }, [navigation]);
  const gogo = useCallback(() => {
    const response = axios.post(
      `${
        Platform.OS === 'ios' ? Config.IOS_API_URL : Config.ANDROID_API_URL
      }/todo/create`,
      {
        title,
        content,
        startDate,
        endDate,
      },
    );
    goMain();
  }, [title, content]);
  return (
    <View>
      <Text style={styles.textInput}>{startDate}</Text>
      <Text style={styles.textInput}>{endDate}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangetitle}
        placeholder="제목을 입력해주세요"
        placeholderTextColor="#666"
        textContentType="none"
        value={title}
        keyboardType={Platform.OS === 'android' ? 'default' : 'email-address'}
        returnKeyType="next"
        clearButtonMode="while-editing"
        ref={titleRef}
        onSubmitEditing={() => contentRef.current?.focus()}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangecontent}
        placeholder="내용을 입력해주세요"
        placeholderTextColor="#666"
        textContentType="emailAddress"
        value={content}
        keyboardType={Platform.OS === 'android' ? 'default' : 'email-address'}
        returnKeyType="next"
        clearButtonMode="while-editing"
        ref={contentRef}
        onSubmitEditing={gogo}
        blurOnSubmit={false}
      />
    </View>
  );
};

export default Todo_detail;

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: 'black',
  },
  inputWrapper: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  },
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
