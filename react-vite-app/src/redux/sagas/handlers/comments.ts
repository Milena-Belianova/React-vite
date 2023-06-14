/* eslint-disable import/no-cycle */
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import {
  setComments,
  setCommentsError,
  Comment,
} from '../../slices/commentsSlice';
import { requestGetPostComments } from '../requests/comments';

export type PostParams = {
  id: number;
};

export function* handleGetPostComments(action: PayloadAction<PostParams>) {
  try {
    const { payload } = action;
    const { id } = payload;
    const response: { data: Array<Comment> } = yield call(
      requestGetPostComments,
      id
    );
    const { data } = response;
    yield put(setComments({ postId: id, comments: data }));
  } catch (error) {
    if (error instanceof Error) {
      yield put(setCommentsError(error.message));
    }
  }
}
