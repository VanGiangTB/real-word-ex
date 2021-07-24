import axiosInstance from "../../app/axios";
export default {
    tags: () => {
        return axiosInstance.get(`tags`).then(res => res.data)
    },
    yourFeed: (params) => {
        return axiosInstance.get(`articles/feed`,{params}).then(res => res.data)
    },
    golbalFeed: (params) => {
        return axiosInstance.get(`articles`, {params}).then(res => res.data)
    },
}