import {combineReducers} from 'redux';
import TodoSlice from '../slices/Todo';

import userSlice from '../slices/user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  Todo: TodoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
