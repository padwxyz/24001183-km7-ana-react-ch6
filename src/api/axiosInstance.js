import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: process.env.API_URL
    baseURL: "http://localhost:3000/api/v1",
    timeout: 100000,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = 'Berear ${token}';
    return config;
});

axiosInstance.interceptors.response.use();

export default axiosInstance;