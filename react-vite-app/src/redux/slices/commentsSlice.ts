/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentsState = {
  commentsByPost: Record<number, Array<Comment>>;
  isCommentsLoading: Record<number, boolean>;
  commentsError: string;
};

const initialState: CommentsState = {
  commentsByPost: {},
  isCommentsLoading: {},
  commentsError: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _action: PayloadAction<{ id: number }>
    ) => {},
    setComments: (
      state,
      action: PayloadAction<{ postId: number; comments: Array<Comment> }>
    ) => {
      state.commentsByPost[action.payload.postId] = action.payload.comments;
    },
    setCommentsError: (state, action: PayloadAction<string>) => {
      state.commentsError = action.payload;
    },
    setIsCommentsLoading: (
      state,
      action: PayloadAction<{ postId: number; isLoading: boolean }>
    ) => {
      state.isCommentsLoading[action.payload.postId] = action.payload.isLoading;
    },
  },
});

export const {
  getComments,
  setComments,
  setCommentsError,
  setIsCommentsLoading,
} = commentsSlice.actions;

export const selectCommentsByPostId = (postId: number) => (state: RootState) =>
  state.comments.commentsByPost[postId];
export const selectIsCommentsLoading = (postId: number) => (state: RootState) =>
  state.comments.isCommentsLoading[postId];
export const selectCommentsError = (state: RootState) =>
  state.comments.commentsError;

export const commentsReducer = commentsSlice.reducer;
