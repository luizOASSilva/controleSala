import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.68.96.42:3000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;