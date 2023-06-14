import { useMemo } from 'react';
import { Post } from '../redux/slices/postsSlice';

export const useSortedPosts = (posts: Array<Post>, sort: string) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      if (sort === 'titleAZ') {
        return [...posts].sort((a, b) => a.title.localeCompare(b.title));
      }
      return [...posts].sort((a, b) => b.title.localeCompare(a.title));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: Array<Post>, sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return [...sortedPosts].filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
