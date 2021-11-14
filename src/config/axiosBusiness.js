import axios from 'axios';
// console.log('Bearer ' + localStorage.getItem('TokenYesmonProveedor'))
const clienteAxiosBusiness = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL_BUSINESS,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    'access-token': localStorage.getItem('TokenYesmonProveedor'),
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
})

export default clienteAxiosBusiness;
