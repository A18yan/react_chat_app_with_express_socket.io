import axios from 'axios';
// base url -> backend url
export const baseUrl = 'http://localhost:3000/api';
// axios instance for unauthenticated requests
export const noAuthAxios = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})
// axios instance for authenticated requests
export const authAxios = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
})