import {View, Text, Button, Platform} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import useSocket from '../hook/useSocket';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import axios from 'axios';
import Config from 'react-native-config';
import {io} from 'socket.io-client';

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

  const onMessage = useCallback((v: number) => {
    console.log(v);
    setOnlineList([v]);
  }, []);
  useEffect(() => {
    socket?.on('test', onMessage);
    return () => {
      socket?.off('test', onMessage);
    };
  }, [socket, onMessage]);

  const test = async () => {
    const response = await axios.get(
      `${
        Platform.OS === 'ios' ? Config.IOS_API_URL : Config.ANDROID_API_URL
      }/dms/${friendId}/chats`,
    );
  };
  return (
    <View>
      <Button title="TAKE message gogogo" onPress={test}></Button>
      <Text>{onlineList.length}</Text>
    </View>
  );
};

export default ChatRoom;
