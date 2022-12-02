import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {LoggedInParamList} from '../../AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors, height, width} from '../public/GlobalStyles';
import axios from 'axios';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import Todo_container from '../components/Todo_container';
type MainScreenProps = NativeStackScreenProps<LoggedInParamList, 'HomeStack'>;

export type Todo = {
  content: string;
  createId: number;
  createdAt: Date;
  endDate: Date;
  id: number;
  startDate: Date;
  title: string;
  updatedAt: Date;
};
const Main = ({navigation}: MainScreenProps) => {
  const [Todo, setTodo] = useState([]);
  const TodoMakeList = useSelector((state: RootState) => state.Todo.Todo);

  const toChoiceDate = useCallback(() => {
    navigation.navigate('ChoiceDate');
  }, [navigation]);

  const TakeTodo = useCallback(async () => {
    const response = await axios.get(
      `${
        Platform.OS === 'ios' ? Config.IOS_API_URL : Config.ANDROID_API_URL
      }/todo`,
    );
    setTodo(response.data);
  }, [Todo, TodoMakeList]);

  const DeleteTodo = async (v: number) => {
    const response = await axios.delete(
      `${
        Platform.OS === 'ios' ? Config.IOS_API_URL : Config.ANDROID_API_URL
      }/todo/${v}`,
    );
  };
  useEffect(() => {
    TakeTodo();
  }, [TodoMakeList]);
  return (
    <>
      <ScrollView>
        <View style={style.container}>
          <TouchableOpacity
            style={style.CreateButton}
            onPress={() => {
              toChoiceDate();
            }}>
            <Text style={style.CreateButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {Todo.map((item: Todo, idx: number) => {
          return (
            <Todo_container
              text={item.title}
              itemId={item.id}
              deleteTodo={DeleteTodo}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default Main;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  CreateButton: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    width: Number(width) * 250,
    height: Number(height) * 60,
  },
  CreateButtonText: {
    fontSize: 50,
    color: 'white',
  },
});
