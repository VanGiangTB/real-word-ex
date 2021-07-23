import axiosInstance from "../../app/axios";
export default {
    tags: () => {
        return axiosInstance.get(`tags`).then(res => res.data)
    },
    yourFeed: () => {
        return axiosInstance.get(`articles/feed`).then(res => res.data)
    },
    golbalFeed: () => {
        return axiosInstance.get(`articles`).then(res => res.data)
    },
}