import {View, Text, Button, Platform} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import useSocket from '../hook/useSocket';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import axios from 'axios';
import Config from 'react-native-config';

const ChatRoom = () => {
  const [socket, disconnect] = useSocket();
  const [onlineList, setOnlineList] = useState<number[]>([]);
  const [friendId, setfriendId] = useState(1);
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  const dispatch = useDispatch();
  const userinfo = useSelector((state: RootState) => state.user);
  const messageListener = useCallback((v: number) => {
    console.log(v);
    setOnlineList([v]);
  }, []);

  useEffect(() => {
    socket?.on('onlineList', (data: number[]) => {
      setOnlineList(data);
    });
    console.log('socket on dm', socket?.hasListeners('dm'), socket);
    return () => {
      console.log('socket off dm', socket?.hasListeners('dm'));
      socket?.off('onlineList');
    };
  }, [socket]);
  const onMessage = useCallback((v: number) => {
    console.log(v);
    setOnlineList([v]);
  }, []);
  useEffect(() => {
    socket?.on('chat', onMessage);
    return () => {
      socket?.off('chat', onMessage);
    };
  }, [socket, onMessage]);
  // useEffect(() => {
  //   if (socket && isLoggedIn) {
  //     socket?.emit('login', {id: userinfo?.id});
  //     socket?.on('login', v => {
  //       messageListener(v);
  //     });
  //   }
  //   return () => {
  //     if (socket) {
  //       socket.off('login');
  //     }
  //   };
  // }, [socket]);
  const test = async () => {
    const response = await axios.get(
      `${
        Platform.OS === 'ios' ? Config.IOS_API_URL : Config.ANDROID_API_URL
      }/dms/${friendId}/chats`,
    );
    console.log(response.data);
  };
  return (
    <View>
      <Button title="TAKE message gogogo" onPress={test}></Button>
      <Text>{onlineList.length}</Text>
    </View>
  );
};

export default ChatRoom;
