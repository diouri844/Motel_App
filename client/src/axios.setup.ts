import axios, { AxiosInstance } from "axios";



export const axiosConfig = {
    baseURL: "http://127.0.0.1:3000/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
};




const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3000/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});


//request intercepter :
axiosInstance.interceptors.request.use(
    config => { return config },
    error => { return Promise.reject(error) }
);

// response intercepter :
axiosInstance.interceptors.response.use(
    response => { return response },
    error => { return Promise.reject(error) }
);
export default axiosInstance;