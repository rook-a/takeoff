import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../utils/const';
import { userSlice } from './user-slice/user-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
});
