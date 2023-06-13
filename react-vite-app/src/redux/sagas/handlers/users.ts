/* eslint-disable import/no-cycle */
import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { requestGetPostsByUserId, requestGetUser } from '../requests/users';
import { Post } from '../../slices/postsSlice';
import {
  setUsersPosts,
  setUsersError,
  setUser,
  User,
} from '../../slices/usersSlice';

export type UserInfo = {
  id: number;
};

export function* handleGetPostsByUserId(action: PayloadAction<UserInfo>) {
  try {
    const { payload } = action;
    const { id } = payload;
    const response: { data: Array<Post> } = yield call(
      requestGetPostsByUserId,
      id
    );
    const { data } = response;
    yield put(setUsersPosts(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setUsersError(error.message));
    }
  }
}

export function* handleGetUser(action: PayloadAction<UserInfo>) {
  try {
    const { payload } = action;
    const { id } = payload;
    const response: { data: User } = yield call(requestGetUser, id);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setUsersError(error.message));
    }
  }
}
