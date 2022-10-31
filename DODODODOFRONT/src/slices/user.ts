import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  nickname: '',
  email: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
