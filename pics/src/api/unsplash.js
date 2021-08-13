import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PPbz7PHsAWlE0_FfQ1hWTW4snA1rzYLQPsRPF7Lk5OQ'
  }
});