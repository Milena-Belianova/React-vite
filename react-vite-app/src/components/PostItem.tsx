/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { Card, Button, Collapse, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Post } from '../redux/slices/postsSlice';
import {
  getComments,
  selectCommentsByPostId,
  selectCommentsError,
  selectIsCommentsLoading,
  setIsCommentsLoading,
} from '../redux/slices/commentsSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Comment } from './Comment';
import { ErrorMessage } from './UI/ErrorMessage';
import { Loader } from './UI/Loader';
import userAvatar from '../assets/user-avatar.png';

export const PostItem = ({ id, title, body, userId }: Post) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectCommentsByPostId(id));
  const isCommentsLoading = useAppSelector(selectIsCommentsLoading(id));
  const commentsError = useAppSelector(selectCommentsError);

  const handleCommentsClick = () => {
    if (open) {
      setOpen(!open);
    } else {
      dispatch(setIsCommentsLoading({ postId: id, isLoading: true }));
      dispatch(getComments({ id }));
      dispatch(setIsCommentsLoading({ postId: id, isLoading: false }));
      setOpen(!open);
    }
  };

  return (
    <Card
      style={{ minWidth: '19rem' }}
      className="flex-grow-1 flex-row bg-light post-item"
    >
      <div
        className="d-flex p-3 align-items-center justify-content-center"
        style={{ height: '100%' }}
      >
        <Image
          src={userAvatar}
          style={{ maxWidth: '7rem', maxHeight: '7rem', cursor: 'pointer' }}
          className="img-thumbnail"
          alt="user avatar"
          roundedCircle
          onClick={() => navigate(`/users/${userId}`)}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button
          onClick={handleCommentsClick}
          aria-controls="collapse-text"
          aria-expanded={open}
          variant="outline-primary"
          style={{ marginBottom: '16px' }}
        >
          Комментарии
        </Button>
        <Collapse in={open}>
          <div id="collapse-text">
            <div style={{ padding: '16px' }} className="card card-body">
              {isCommentsLoading ? (
                <Loader />
              ) : commentsError ? (
                <ErrorMessage message={`Произошла ошибка: ${commentsError}`} />
              ) : (
                comments?.map((comment) => (
                  <Comment
                    key={comment.id}
                    postId={comment.postId}
                    id={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                  />
                ))
              )}
            </div>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};
