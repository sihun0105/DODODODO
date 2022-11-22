import {View, Text, SafeAreaView, Platform} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import useSocket from '../hook/useSocket';
import MessageInput from '../components/MessageInput';
import Message from '../components/Message';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import Config from 'react-native-config';

const id = 6; // 받는사람
const ChatSpace = () => {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  const [socket, disconnect] = useSocket();
  const [message, setmessage] = useState<string[]>([]);

  const showToast = useCallback(
    (m: string) => {
      Toast.show({
        type: 'info',
        text1: '새로운 메시지가 도착했습니다.',
        text2: `${m}👋`,
      });
    },
    [message],
  );
  const send = (v: string) => {
    axios.post(
      `${
        Platform.OS === 'ios' ? Config.IOS_API_URL : Config.ANDROID_API_URL
      }/dms/${id}/chats`,
      {
        content: v,
      },
    );
    // socket?.emit('message', v);
  };

  const messageListener = useCallback(
    (m: string) => {
      setmessage([...message, m.content]);
      showToast(m.content);
    },
    [message],
  );
  useEffect(() => {
    if (socket && isLoggedIn) {
      socket.on('message', messageListener);
    }
    return () => {
      if (socket) {
        socket.off('message', messageListener);
      }
    };
  }, [socket, messageListener]);
  return (
    <SafeAreaView>
      <Message message={message} />
      <MessageInput send={send} />
    </SafeAreaView>
  );
};

export default ChatSpace;
