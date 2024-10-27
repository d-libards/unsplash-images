import axios from 'axios';

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const authFetch = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});

export default authFetch;
