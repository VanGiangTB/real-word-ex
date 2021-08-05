import axiosInstance from "../../app/axios"

export default {
    login: params => {
        return axiosInstance.post(`users/login`, params).then(res => res.data)
    },
    
    register: params => {
        return axiosInstance.post(`users`, params).then(res => res.data)
    },
   getUserInfo: params => {
       return axiosInstance.get(`profiles/${params.id}`).then(res => res.data)
   },
   putUserInfo:params => {
       return axiosInstance.put(`user`,params).then(res => res.data)
   },
   getMyArticle:params => {
       return axiosInstance.get(`articles`,{params}).then(res => res.data)
   }

//    upadteUser: params => {
//        return axiosInstance.put("profiles", params).then(res => res.data)
//    },
//    deleteUser: params => {
//        // has body request
//     //    return axiosInstance.delete("profiles", params).then(res => res.data)

//     //no body request
//     return axiosInstance.delete(`profiles/${params.id}`).then(res => res.data)
//    }
}