import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

// export const getPost = () => API.get('api/v1/store');

// export const createPost = (post) => API.get('api/v1/store', post);

export default API;
