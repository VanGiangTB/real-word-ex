import axios from "axios"

const baseUrl = "https://conduit.productionready.io/api"

export default {
    login: params => {
        return axios.post(`${baseUrl}/users/login`, params).then(res => res.data)
    },
    register: params => {
        return axios.post(`${baseUrl}/users`, params).then(res => res.data)
    }
}