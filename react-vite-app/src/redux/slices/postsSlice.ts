/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type HomeState = {
  posts: Array<Post>;
};

const initialState: HomeState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Array<Post>>) => {
      state.posts = action.payload;
    },
    getPosts() {},
  },
});

export const { setPosts, getPosts } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export const postsReducer = postsSlice.reducer;
