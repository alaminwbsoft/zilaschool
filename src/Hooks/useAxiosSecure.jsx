import axios from "axios";
import { url } from "../connection";

const axiosInstance = axios.create({
    baseURL:`${url}/api`
})

const useAxiosSecure = () => {
    axiosInstance.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('token')
          if(token){
            config.headers["Authorization"] = "Bearer " + token
          }
          return config
        },
        (error) => {
          Promise.reject(error)
        }
      );
      return axiosInstance;
};

export default useAxiosSecure;