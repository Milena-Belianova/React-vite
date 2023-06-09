import { useEffect } from 'react';
import { Container, Stack } from 'react-bootstrap';
import { PostItem } from '../components/home/PostItem';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getPosts, selectPosts } from '../redux/slices/postsSlice';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useAppSelector(selectPosts);

  return (
    <Container>
      <h1 className="mb-3 text-primary">Posts</h1>
      <Stack gap={4}>
        {posts.map((post) => (
          <PostItem key={post.id} title={post.title} text={post.body} />
        ))}
      </Stack>
    </Container>
  );
};
