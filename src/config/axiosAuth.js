import axios from 'axios';

const clienteAxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL_SECURITY
  //  headers: {
  //   'Content-Type': 'application/json',
  //   'X-Requested-With': 'XMLHttpRequest'
  // }
})

export default clienteAxiosAuth;
