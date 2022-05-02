import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { handleError } from '../../services/handle-error';

import { APIRoute, FetchStatus, NameSpace } from '../../utils/const';
import { AppDispatch, State } from '../../types/state';
import { Contact, NewContact } from '../../types/contact';
import { Data } from '../../types/data';

interface InitialState {
  data: Data[];
  contacts: Contact[];
  contactsStatus: FetchStatus;
  contactsError: boolean;

  updateContactState: FetchStatus;
}

const initialState: InitialState = {
  data: [],
  contacts: [],
  contactsStatus: FetchStatus.Idle,
  contactsError: false,

  updateContactState: FetchStatus.Idle,
};

export const fetchContacts = createAsyncThunk<
  Data,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchContacts', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Data>(APIRoute.Contacts);

    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
});

export const sendNewContact = createAsyncThunk<
  NewContact,
  NewContact,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/sendNewContact',
  async (
    { name, company, city, phone }: NewContact,
    { dispatch, extra: api },
  ) => {
    try {
      const { data } = await api.post<NewContact>(APIRoute.Contacts, {
        name,
        company,
        city,
        phone,
      });

      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const updateContact = createAsyncThunk<
  undefined,
  Contact,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/updateContact',
  async (
    { id, name, company, city, phone }: Contact,
    { dispatch, extra: api },
  ) => {
    try {
      const { data } = await api.put(`${APIRoute.Contacts}/${id}`, {
        name,
        company,
        city,
        phone,
      });

      return data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
);

export const deleteContact = createAsyncThunk<
  undefined,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/updateContact', async (id: number, { dispatch, extra: api }) => {
  try {
    return await api.delete(`${APIRoute.Contacts}/${id}`);
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
      })
      .addCase(updateContact.pending, (state) => {
        state.updateContactState = FetchStatus.Pending;
      })
      .addCase(updateContact.fulfilled, (state) => {
        state.updateContactState = FetchStatus.Fulfilled;
      })
      .addCase(updateContact.rejected, (state) => {
        state.updateContactState = FetchStatus.Rejected;
      });
  },
});

const selectContactsState = (state: State) => state[NameSpace.Contacts];

export const selectContacts = (state: State) =>
  selectContactsState(state).contacts;
export const selectUpdateContactStatus = (state: State) =>
  selectContactsState(state).updateContactState;
