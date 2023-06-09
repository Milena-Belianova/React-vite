/* eslint-disable import/no-cycle */
import { all, takeLatest } from 'redux-saga/effects';
import { handleGetPosts } from './handlers/posts';
import { getPosts } from '../slices/postsSlice';

function* watcherSaga() {
  yield takeLatest(getPosts.type, handleGetPosts);
}

export default function* rootSaga() {
  yield all([watcherSaga()]);
}
