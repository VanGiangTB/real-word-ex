import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://conduit-api-realworld.herokuapp.com/api/',
    timeout: 600000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

//config request
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // add token in header
    const token= localStorage.getItem('jwt');
    if (token) {
      config.headers["authorization"] = `Token ${token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance