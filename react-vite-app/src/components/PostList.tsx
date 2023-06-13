import { Stack } from 'react-bootstrap';
import { PostItem } from './PostItem';
import { Post } from '../redux/slices/postsSlice';
import { ErrorMessage } from './UI/ErrorMessage';

type PostListProps = {
  posts: Array<Post>;
};

export const PostList = ({ posts }: PostListProps) => {
  if (!posts.length) {
    return <ErrorMessage message="Посты не найдены!" />;
  }

  return (
    <Stack gap={4}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ))}
    </Stack>
  );
};
