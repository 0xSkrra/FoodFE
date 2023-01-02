import axios from 'axios'
import { getUser } from '../../Auth';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL || '',
    headers:{
        'content-type': 'application/json',
    }
})

API.interceptors.request.use((config) => {
    const user = getUser()
    if(user === null){
        return config
    } 
    else{
        config.headers!.authorization = `Bearer ${user.access_token}`;
    } 

    return config

})

export default API