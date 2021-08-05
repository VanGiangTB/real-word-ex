import axiosInstance from "../../app/axios";
export default {
    tags: () => {
        return axiosInstance.get(`tags`).then(res => res.data)
    },
    yourFeed: (params) => {
        return axiosInstance.get(`articles/feed`,{params}).then(res => res.data)
    },
    globalFeed: (params) => {
        return axiosInstance.get(`articles`, {params}).then(res => res.data)
    },
    createPost: (params) => {
        return axiosInstance.post(`articles`,params).then(res => res.data)
    },
    getTitlePost: (params) => {
        return axiosInstance.get(`articles/${params.title}`).then(res => res.data)
    },
    getCommentPost: (params) => {
        return axiosInstance.get(`articles/${params.title}/comments`).then(res => res.data)
    },
    getUserPost: (params) => {
        return axiosInstance.get(`user`).then(res => res.data)
    },
    deleteUserPost: (params) => {
        return axiosInstance.delete(`articles/${params.title}`).then(res => res.data)
    }

}