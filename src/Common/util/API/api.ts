import axios from 'axios'
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers:{
        'content-type': 'application/json',
    }
})

axios.interceptors.request.use(async (config) => {
    return config
})

export default api