/*  
  axios.js

  Architecture for all the api calls

*/
import axios from 'axios';

export default axios.create({
  withCredentials: false,
  baseURL: 'https://jsonplaceholder.typicode.com/',
});


