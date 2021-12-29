import axios from 'axios';

console.log('CLIENTE AUTTTHH',process.env.REACT_APP_BACKEND_URL_SECURITY);
const clienteAxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL_SECURITY
})

export default clienteAxiosAuth;
