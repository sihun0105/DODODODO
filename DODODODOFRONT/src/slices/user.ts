import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  nickname: '',
  email: '',
  name: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
