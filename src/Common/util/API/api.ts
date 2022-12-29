import axios from 'axios'
import { User } from "oidc-client-ts"
import { AuthConst } from '../../Auth';

// TODO: Getting from oidc-client-ts localStore or just get from userStore.getState()?
function getUser() {
    const oidcStorage = sessionStorage.getItem(`oidc.user:${AuthConst.authority}:${AuthConst.client_id}`)
    if (!oidcStorage) {
        return null;
    }

    return User.fromStorageString(oidcStorage);
}
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