import {getStateFromPath} from '@react-navigation/native';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Todo: [],
};

const TodoSlice = createSlice({
  name: 'TOdo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.Todo.push(action.payload);
    },
  },
  extraReducers(builder) {},
});
export default TodoSlice;
