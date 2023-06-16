import axios from 'axios';

export function requestGetPostComments(id: number) {
  return axios.request({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  });
}
