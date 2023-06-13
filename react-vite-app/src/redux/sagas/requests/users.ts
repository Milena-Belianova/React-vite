import axios from 'axios';

export function requestGetPostsByUserId(id: number) {
  return axios.request({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/users/${id}/posts`,
  });
}

export function requestGetUser(id: number) {
  return axios.request({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });
}
