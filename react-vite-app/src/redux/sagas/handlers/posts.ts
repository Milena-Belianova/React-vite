/* eslint-disable import/no-cycle */
import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { requestGetPosts, requestGetPostsByUserId } from '../requests/posts';
import {
  Post,
  setPostError,
  setPostTotalCount,
  setPosts,
} from '../../slices/postsSlice';

export type PaginationParams = {
  limit?: number;
  page?: number;
};

export type UserInfo = {
  id: number;
};

export function* handleGetPosts(action: PayloadAction<PaginationParams>) {
  try {
    const { payload } = action;
    const { limit, page } = payload;
    const response: { headers: Record<string, string>; data: Array<Post> } =
      yield call(requestGetPosts, limit, page);
    const { headers, data } = response;
    yield put(setPosts(data));
    yield put(setPostTotalCount(+headers['x-total-count']));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setPostError(error.message));
    }
  }
}

export function* handleGetPostsByUserId(action: PayloadAction<UserInfo>) {
  try {
    const { payload } = action;
    const { id } = payload;
    const response: { data: Array<Post> } = yield call(
      requestGetPostsByUserId,
      id
    );
    const { data } = response;
    yield put(setPosts(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setPostError(error.message));
    }
  }
}
