import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

Axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default Axios