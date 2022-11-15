import {View, Text, TextInput, Button} from 'react-native';
import React, {useCallback, useState} from 'react';

const MessageInput = ({send}: {send: (v: string) => void}) => {
  const [value, setvalue] = useState('');

  const onChangevalue = useCallback((text: string) => {
    setvalue(text);
  }, []);

  return (
    <View>
      <TextInput
        placeholder="메시지를 입력해 주세요..."
        value={value}
        onChangeText={onChangevalue}
        returnKeyType="send"
        onSubmitEditing={() => {
          send(value);
          setvalue('');
        }}></TextInput>
      <Button
        title="버튼"
        onPress={() => {
          send(value);
          setvalue('');
        }}
      />
    </View>
  );
};

export default MessageInput;
