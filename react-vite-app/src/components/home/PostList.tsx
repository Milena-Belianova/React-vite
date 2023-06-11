import { Stack } from 'react-bootstrap';
import { PostItem } from './PostItem';
import { Post } from '../../redux/slices/postsSlice';

type PostListProps = {
  posts: Array<Post>;
};

export const PostList = ({ posts }: PostListProps) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center', verticalAlign: 'center' }}>
        Посты не найдены!
      </h1>
    );
  }

  return (
    <Stack gap={4}>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} text={post.body} />
      ))}
    </Stack>
  );
};
