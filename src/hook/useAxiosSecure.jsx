import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(response => {
        return response;
    }, error => {
        
    })
};

export default useAxiosSecure;