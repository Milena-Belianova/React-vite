/* eslint-disable import/no-cycle */
import { call, put } from 'redux-saga/effects';
import { requestGetPosts } from '../requests/posts';
import { Post, setPosts } from '../../slices/postsSlice';

export function* handleGetPosts() {
  try {
    const response: { data: Array<Post> } = yield call(requestGetPosts);
    const { data } = response;
    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}
