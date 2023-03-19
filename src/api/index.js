import axios from 'axios';

const api = axios.create({
  baseURL: 'https://project-buddy-tct9.onrender.com',
})

const protectedApi = axios.create({
  baseURL: 'https://project-buddy-tct9.onrender.com',
  timeout: 3 * 60 * 1000,
  headers: {
    common: {
      'Authorization': `JWT ${localStorage.getItem('access')}`,
    }
  }
})

const loginUser = async (data) => await api.post('/auth/jwt/create/', data)
const signUpUser = (step_no) => async (data) => await api.post(step_no === 1 ? '/auth/users/' : '/student/', data)
const getProfile = async (username) => await api.get(`/student/${username}`)

const editProfile = async (data) => await protectedApi.patch(`/student/${data.username}`, data)
const getPosts = async () => await protectedApi.get('/post/')
const createPost = async (data) => await protectedApi.post('/post/', data)
const likePost = async (body) => await protectedApi.post('/post/like/', body)
const getAllComments = async () => await protectedApi.get('/comment/')
const getPostComments = async (pid) => await protectedApi.get(`/post/${pid}/comment/`)
const createPostComment = async (body) => await protectedApi.post('/comment/', body) //{post, content}

export {
  loginUser,
  signUpUser,
  getProfile,
  editProfile,
  getPosts,
  createPost,
  likePost,
  getAllComments,
  getPostComments,
  createPostComment,
}