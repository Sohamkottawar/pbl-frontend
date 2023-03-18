import axios from 'axios';

const api = axios.create({
    baseURL: 'https://project-buddy-tct9.onrender.com/'
})

const loginUser = (data) => api.post('/login', data);

export {
    loginUser,

}