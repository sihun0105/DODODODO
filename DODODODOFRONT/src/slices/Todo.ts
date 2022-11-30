import {getStateFromPath} from '@react-navigation/native';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  title: '',
  content: '',
  StartDate: '',
  EndDate: '',
  createdAt: '',
  updatedAt: '',
};

const TodoSlice = createSlice({
  name: 'TOdo',
  initialState,
  reducers: {
    setTodo(state, action) {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.StartDate = action.payload.StartDate;
      state.EndDate = action.payload.EndDate;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },
  },
  extraReducers(builder) {},
});
export default TodoSlice;
