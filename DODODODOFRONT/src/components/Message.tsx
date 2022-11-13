import {View, Text} from 'react-native';
import React from 'react';

const Message = ({message}: {message: string[]}) => {
  return (
    <>
      <Text>{message}</Text>
    </>
  );
};

export default Message;
