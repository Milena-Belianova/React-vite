import { Comment as CommentType } from '../redux/slices/commentsSlice';

export const Comment = ({ email, body }: CommentType) => {
  return (
    <>
      <h5>{email}</h5>
      <p>{body}</p>
    </>
  );
};
