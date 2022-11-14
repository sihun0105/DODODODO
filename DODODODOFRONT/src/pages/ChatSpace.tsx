import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import useSocket from '../hook/useSocket';
import MessageInput from '../components/MessageInput';
import Message from '../components/Message';
import Toast from 'react-native-toast-message';
// interface Message {
//   user: string;
//   message: string;
// }

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
    socket?.emit('test', v);
  };

  const messageListener = useCallback(
    (m: string) => {
      setmessage([...message, m]);
      showToast(m);
      console.log('새 메시지가 도착했습니다.');
    },
    [message],
  );
  useEffect(() => {
    if (socket && isLoggedIn) {
      //socket.emit('test', 'hello');
      socket.on('test', messageListener);
    }
    return () => {
      if (socket) {
        socket.off('test', messageListener);
      }
    };
  }, [socket, messageListener]);
  return (
    <SafeAreaView>
      <MessageInput send={send} />
      <Message message={message} />
    </SafeAreaView>
  );
};

export default ChatSpace;
