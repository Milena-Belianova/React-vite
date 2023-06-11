/* eslint-disable import/no-cycle */
import { call, put } from 'redux-saga/effects';
import { requestGetPosts, requestGetPostsByUserId } from '../requests/posts';
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

// export function* handleGetPostsByUserId(action) {
//   try {
//     const { payload } = action;
//     const { id, test } = payload;
//     const response: { data: Array<Post> } = yield call(
//       requestGetPostsByUserId,
//       id
//     );
//     const { data } = response;
//     yield put(setPosts(data));
//   } catch (error) {
//     console.log(error);
//   }
// }
