import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://fund-flow-pdl-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;