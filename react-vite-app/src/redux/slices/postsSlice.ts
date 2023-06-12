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
  isLoading: boolean;
  postError: string;
  postTotalCount: number;
  postLimit: number;
};

const initialState: HomeState = {
  posts: [],
  isLoading: true,
  postError: '',
  postTotalCount: 0,
  postLimit: 10,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Array<Post>>) => {
      state.posts = action.payload;
    },
    getPosts: (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _action: PayloadAction<{ postLimit: number; page: number }>
    ) => {},
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setPostError: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
    },
    setPostTotalCount: (state, action: PayloadAction<number>) => {
      state.postTotalCount = action.payload;
    },
  },
});

export const {
  setPosts,
  getPosts,
  setIsLoading,
  setPostError,
  setPostTotalCount,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectIsLoading = (state: RootState) => state.posts.isLoading;
export const selectPostError = (state: RootState) => state.posts.postError;
export const selectPostTotalCount = (state: RootState) =>
  state.posts.postTotalCount;
export const selectPostLimit = (state: RootState) => state.posts.postLimit;

export const postsReducer = postsSlice.reducer;
