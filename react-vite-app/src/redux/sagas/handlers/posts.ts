/* eslint-disable import/no-cycle */
import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { requestGetPosts } from '../requests/posts';
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
