import axiosInstance from "../../app/axios";
export default {
    tags: () => {
        return axiosInstance.get(`tags`).then(res => res.data)
    }
}