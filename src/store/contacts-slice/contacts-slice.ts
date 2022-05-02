import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { handleError } from '../../services/handle-error';

import { APIRoute, FetchStatus, NameSpace } from '../../utils/const';
import { AppDispatch, State } from '../../types/state';
import { Contact } from '../../types/contact';

interface InitialState {
  contacts: Contact[];
  contactsStatus: FetchStatus;
  contactsError: boolean;
}

const initialState: InitialState = {
  contacts: [],
  contactsStatus: FetchStatus.Idle,
  contactsError: false,
};

export const fetchContacts = createAsyncThunk<
  { contacts: Contact[] },
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchContacts', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<{ contacts: Contact[] }>(APIRoute.Contacts);

    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
});

export const contactsSlice = createSlice({
  name: NameSpace.Contacts,
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(fetchContacts.pending, (state) => {
        state.contactsStatus = FetchStatus.Pending;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts;
        state.contactsStatus = FetchStatus.Fulfilled;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.contactsStatus = FetchStatus.Rejected;
        state.contactsError = true;
      });
  },
});

const selectContactsState = (state: State) => state[NameSpace.Contacts];

export const selectContacts = (state: State) =>
  selectContactsState(state).contacts;
