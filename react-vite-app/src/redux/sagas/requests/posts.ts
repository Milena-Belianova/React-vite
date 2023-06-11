import axios from 'axios';

export function requestGetPosts() {
  return axios.request({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
}

export function requestGetPostsByUserId(id: string) {
  return axios.request({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
  });
}
