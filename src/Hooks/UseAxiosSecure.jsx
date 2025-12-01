import axios from "axios";
import useAuth from "./UseAuth";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return instance;
};
export default useAxiosSecure;
