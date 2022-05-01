import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { removeUser, setUser } from '../../services/user';
import { handleError } from '../../services/handle-error';
import { redirectToRoute } from '../action';

import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  FetchStatus,
  NameSpace,
} from '../../utils/const';
import { UserData } from '../../types/user-data';
import { AuthData } from '../../types/auth-data';
import { AppDispatch, State } from '../../types/state';

interface InitialState {
  authorizationStatus: AuthorizationStatus;

  loginStatus: FetchStatus;
  logoutStatus: FetchStatus;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,

  loginStatus: FetchStatus.Idle,
  logoutStatus: FetchStatus.Idle,
};

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch (err) {
    handleError(err);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ email, password }: AuthData, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, {
        email,
        password,
      });

      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    } catch (err) {
      handleError(err);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      throw err;
    }
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.delete(APIRoute.Logout);
    dispatch(fetchOffersAction());
  } catch (err) {
    handleError(err);
    throw err;
  }
});

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers: (buider) => {
    buider.addCase(loginAction.pending, (state) => {});
  },
});

export const { requireAuthorization } = userSlice.actions;

const selectUserState = (state: State) => state[NameSpace.User];

export const selectRequireAuthrization = (state: State) =>
  selectUserState(state).authorizationStatus;
export const selectloginStatus = (state: State) =>
  selectUserState(state).loginStatus;
