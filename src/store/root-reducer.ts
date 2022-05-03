import { combineReducers } from '@reduxjs/toolkit';

import { contactsSlice } from './contacts-slice/contacts-slice';
import { userSlice } from './user-slice/user-slice';

import { NameSpace } from '../utils/const';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Contacts]: contactsSlice.reducer,
});
