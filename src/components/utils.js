import axios from 'axios';

export const axiosInstance = axios.create({
    // baseURL: "https://industrial-auth-api.fly.dev", 
    baseURL: "https://3000-rtornero1-projectmgmtba-uzpaa8tdc7s.ws-us89b.gitpod.io", 
    timeout: 5000,
    headers: {'Access-Control-Allow-Origin': '*'}
});