
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
