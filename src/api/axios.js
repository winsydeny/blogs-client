
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export const get = (url) => {
    return axios.get(url);
}
export const post = (url,data) => {
    return axios.post(url,data);
}
export const remove = (url) =>{
    
    return axios.delete(url);
}

// interceptors 
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    // console.log(token);
    axios.defaults.headers.common['Authorization'] = token;
    return config;
},(error) => {
    return Promise.reject(error);
});