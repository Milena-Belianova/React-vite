/* eslint-disable no-nested-ternary */
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import {
  getUser,
  getUsersPosts,
  selectIsLoading,
  selectUser,
  selectUsersError,
  selectUsersPosts,
  setIsLoading,
} from '../../redux/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ErrorMessage } from '../../components/UI/ErrorMessage';
import { Loader } from '../../components/UI/Loader';
import { PostList } from '../../components/PostList';
import { UserCard } from './components/UserCard';

export const UserDetails = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const user = useAppSelector(selectUser);
  const userPosts = useAppSelector(selectUsersPosts);
  const isPostsLoading = useAppSelector(selectIsLoading);
  const usersError = useAppSelector(selectUsersError);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      dispatch(setIsLoading(true));
      dispatch(getUser({ id: +params.id }));
      dispatch(getUsersPosts({ id: +params.id }));
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 500);
    }
  }, [dispatch, params.id]);

  const handleBackBtnClick = () => {
    navigate('/');
  };

  return (
    <Container className="pt-4" style={{ paddingBottom: '4rem' }}>
      <Button
        variant="secondary"
        className="d-flex align-items-center justify-content-center ms-auto"
        style={{ width: '7rem' }}
        onClick={handleBackBtnClick}
      >
        <RiArrowGoBackFill className="me-1" />
        Назад
      </Button>
      <h1 className="mt-2 mb-4 text-primary text-center">
        Подробности о пользователе
      </h1>
      {isPostsLoading ? (
        <Loader />
      ) : usersError ? (
        <ErrorMessage message={`Произошла ошибка: ${usersError}`} />
      ) : (
        <>
          <UserCard user={user} />
          <h3 className="mt-4 mb-4 text-primary">Посты</h3>
          <PostList posts={userPosts} />
        </>
      )}
    </Container>
  );
};
