import axios from 'axios';

export function requestGetPosts(limit = 10, page = 1) {
  return axios.request({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/posts`,
    params: {
      _limit: limit,
      _page: page,
    },
  });
}

export function requestGetPostsByUserId(id: number) {
  return axios.request({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/users/${id}/posts`,
  });
}
