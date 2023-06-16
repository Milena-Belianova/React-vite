/* eslint-disable import/no-cycle */
import { all, takeLatest } from 'redux-saga/effects';
import { handleGetPosts } from './handlers/posts';
import { handleGetPostsByUserId, handleGetUser } from './handlers/users';
import { getPosts } from '../slices/postsSlice';
import { getUsersPosts, getUser } from '../slices/usersSlice';
import { getComments } from '../slices/commentsSlice';
import { handleGetPostComments } from './handlers/comments';

function* watcherPostsSaga() {
  yield takeLatest(getPosts.type, handleGetPosts);
}

function* watcherCommentsSaga() {
  yield takeLatest(getComments.type, handleGetPostComments);
}

function* watcherUsersPostsSaga() {
  yield takeLatest(getUsersPosts.type, handleGetPostsByUserId);
}

function* watcherUsersSaga() {
  yield takeLatest(getUser.type, handleGetUser);
}

export default function* rootSaga() {
  yield all([
    watcherPostsSaga(),
    watcherCommentsSaga(),
    watcherUsersPostsSaga(),
    watcherUsersSaga(),
  ]);
}
