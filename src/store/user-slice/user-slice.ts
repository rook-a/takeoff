import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    const { data } = await api.get(APIRoute.Login);

    if (data.length > 0) {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } else {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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

      dispatch(redirectToRoute(AppRoute.Contacts));
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
    await api.delete(`${APIRoute.Login}/1`);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Root));
  } catch (err) {
    handleError(err);
    throw err;
  }
});

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (
      state,
      action: PayloadAction<AuthorizationStatus>,
    ) => {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(loginAction.pending, (state) => {
        state.loginStatus = FetchStatus.Pending;
      })
      .addCase(
        loginAction.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loginStatus = FetchStatus.Fulfilled;
          state.authorizationStatus = AuthorizationStatus.Auth;
          setUser(action.payload);
        },
      )
      .addCase(loginAction.rejected, (state) => {
        state.loginStatus = FetchStatus.Rejected;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.pending, (state) => {
        state.logoutStatus = FetchStatus.Pending;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.logoutStatus = FetchStatus.Fulfilled;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        removeUser();
      })
      .addCase(logoutAction.rejected, (state) => {
        state.logoutStatus = FetchStatus.Rejected;
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  },
});

export const { requireAuthorization } = userSlice.actions;

const selectUserState = (state: State) => state[NameSpace.User];

export const selectAuthrizationStatus = (state: State) =>
  selectUserState(state).authorizationStatus;
export const selectloginStatus = (state: State) =>
  selectUserState(state).loginStatus;
