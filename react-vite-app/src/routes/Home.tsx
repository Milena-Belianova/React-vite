/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Post, getPosts, selectPosts } from '../redux/slices/postsSlice';
import { PostList } from '../components/home/PostList';
import { PostFilter } from '../components/home/PostFilter';
import { usePosts } from '../hooks/usePosts';

export const Home = () => {
  const dispatch = useAppDispatch();
  const storePosts = useAppSelector(selectPosts);
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    setPosts(storePosts);
  }, [storePosts]);

  return (
    <Container>
      <h1 className="mb-4 text-primary">Posts</h1>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} />
    </Container>
  );
};
