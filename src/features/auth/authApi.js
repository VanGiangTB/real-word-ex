import axios from "axios"

const baseUrl = "https://conduit.productionready.io/api"
const token= localStorage.getItem('jwt');

export default {
    login: params => {
        return axios.post(`${baseUrl}/users/login`, params,{
            headers:{
                'Authoriation' : `Bearer ${token}`,
            }
        }).then(res => res.data)
    },
    
    register: params => {
        return axios.post(`${baseUrl}/users`, params).then(res => res.data)
    },
   
}