import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  nickname: '',
  email: '',
  id: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
