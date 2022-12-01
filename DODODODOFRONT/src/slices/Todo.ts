import {getStateFromPath} from '@react-navigation/native';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
  Todo: string[];
}
const initialState: InitialState = {
  Todo: [],
};

const TodoSlice = createSlice({
  name: 'TOdo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.Todo.push(action.payload);
    },
  },
  extraReducers(builder) {},
});
export default TodoSlice;
