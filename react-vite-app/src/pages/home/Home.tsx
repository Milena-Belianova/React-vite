/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getPosts,
  selectIsLoading,
  selectPostError,
  selectPostLimit,
  selectPostTotalCount,
  selectPosts,
  setIsLoading,
} from '../../redux/slices/postsSlice';
import { PostList } from '../../components/PostList';
import { PostFilter } from './components/PostFilter';
import { usePosts } from '../../hooks/usePosts';
import { Loader } from '../../components/UI/Loader';
import { ErrorMessage } from '../../components/UI/ErrorMessage';
import { PaginationBlock } from '../../components/UI/PaginationBlock';
import { getPageCount } from '../../utils/pages';

export const Home = () => {
  const dispatch = useAppDispatch();
  const storePosts = useAppSelector(selectPosts);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(
    storePosts,
    filter.sort,
    filter.query
  );
  const isPostsLoading = useAppSelector(selectIsLoading);
  const postError = useAppSelector(selectPostError);
  // pagination
  const postTotalCount = useAppSelector(selectPostTotalCount);
  const postLimit = useAppSelector(selectPostLimit);
  const [totalPages, setTotalPages] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(getPosts({ postLimit, page }));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 500);
    setTotalPages(getPageCount(postTotalCount, postLimit));
  }, [dispatch, postLimit, page, postTotalCount]);

  return (
    <Container style={{ height: '100%' }}>
      <h1 className="mb-4 mt-4 text-primary text-center">Список постов</h1>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <Loader />
      ) : postError ? (
        <ErrorMessage message={`Произошла ошибка: ${postError}`} />
      ) : (
        <>
          <PostList posts={sortedAndSearchedPosts} />
          {!!sortedAndSearchedPosts.length && (
            <PaginationBlock
              activePage={page}
              setCurrentPage={setPage}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </Container>
  );
};
