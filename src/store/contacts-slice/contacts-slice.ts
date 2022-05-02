import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { handleError } from '../../services/handle-error';

import { APIRoute, FetchStatus, NameSpace } from '../../utils/const';
import { AppDispatch, State } from '../../types/state';
import { Contact, NewContact } from '../../types/contact';

interface InitialState {
  contacts: Contact[];
  contactsStatus: FetchStatus;

  updateContactStatus: FetchStatus;
  deleteContactStatus: FetchStatus;
  sendNewContactStatus: FetchStatus;
}

const initialState: InitialState = {
  contacts: [],
  contactsStatus: FetchStatus.Idle,

  updateContactStatus: FetchStatus.Idle,
  deleteContactStatus: FetchStatus.Idle,
  sendNewContactStatus: FetchStatus.Idle,
};

export const fetchContacts = createAsyncThunk<
  Contact[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchContacts', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Contact[]>(APIRoute.Contacts);

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
>('data/deleteContact', async (id: number, { dispatch, extra: api }) => {
  try {
    const { data } = await api.delete(`${APIRoute.Contacts}/${id}`);
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
        state.contacts = action.payload;
        state.contactsStatus = FetchStatus.Fulfilled;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.contactsStatus = FetchStatus.Rejected;
      })
      .addCase(updateContact.pending, (state) => {
        state.updateContactStatus = FetchStatus.Pending;
      })
      .addCase(updateContact.fulfilled, (state) => {
        state.updateContactStatus = FetchStatus.Fulfilled;
      })
      .addCase(updateContact.rejected, (state) => {
        state.updateContactStatus = FetchStatus.Rejected;
      })
      .addCase(sendNewContact.pending, (state) => {
        state.sendNewContactStatus = FetchStatus.Pending;
      })
      .addCase(sendNewContact.fulfilled, (state) => {
        state.sendNewContactStatus = FetchStatus.Fulfilled;
      })
      .addCase(sendNewContact.rejected, (state) => {
        state.sendNewContactStatus = FetchStatus.Rejected;
      })
      .addCase(deleteContact.pending, (state) => {
        state.deleteContactStatus = FetchStatus.Pending;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.deleteContactStatus = FetchStatus.Fulfilled;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.deleteContactStatus = FetchStatus.Rejected;
      });
  },
});

const selectContactsState = (state: State) => state[NameSpace.Contacts];

export const selectContacts = (state: State) =>
  selectContactsState(state).contacts;
export const selectUpdateContactStatus = (state: State) =>
  selectContactsState(state).updateContactStatus;
export const selectSendContactStatus = (state: State) =>
  selectContactsState(state).sendNewContactStatus;
export const selectDeleteContactStatus = (state: State) =>
  selectContactsState(state).deleteContactStatus;
