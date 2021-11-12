import axios from 'axios';

const clienteAxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL_SECURITY
  //  headers: {
  //   'Content-Type': 'application/json',
  //   'X-Requested-With': 'XMLHttpRequest'
  // }
})

console.log(process.env.REACT_APP_BACKEND_URL_SECURITY);
export default clienteAxiosAuth;
