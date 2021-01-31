import axios from 'axios';

const axiosInstance = axios.create();

export const post = (url, query) => {
  return axiosInstance.post(url, query);
};
