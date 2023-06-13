/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Post } from './postsSlice';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type UsersState = {
  user: User | null;
  usersPosts: Array<Post>;
  isLoading: boolean;
  usersError: string;
};

const initialState: UsersState = {
  user: null,
  usersPosts: [],
  isLoading: true,
  usersError: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUser: (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _action: PayloadAction<{ id: number }>
    ) => {},
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUsersPosts: (state, action: PayloadAction<Array<Post>>) => {
      state.usersPosts = action.payload;
    },
    getUsersPosts: (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _action: PayloadAction<{ id: number }>
    ) => {},
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUsersError: (state, action: PayloadAction<string>) => {
      state.usersError = action.payload;
    },
  },
});

export const {
  getUser,
  setUser,
  setUsersPosts,
  getUsersPosts,
  setIsLoading,
  setUsersError,
} = usersSlice.actions;

export const selectUser = (state: RootState) => state.users.user;
export const selectUsersPosts = (state: RootState) => state.users.usersPosts;
export const selectIsLoading = (state: RootState) => state.users.isLoading;
export const selectUsersError = (state: RootState) => state.users.usersError;

export const usersReducer = usersSlice.reducer;
