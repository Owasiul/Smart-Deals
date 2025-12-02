import axios from "axios";
import useAuth from "./UseAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});
const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // request interceptor
    const requestInteceptor = instance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
      return config;
    });
    // response interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const errStatus = err.status;
        if (errStatus === 401 || errStatus === 403) {
          // console.log("Have to log out the user");
          logOut().then(() => {
            navigate("/auth/login");
          });
        }
      }
    );
    return () => {
      instance.interceptors.request.eject(requestInteceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);
  return instance;
};
export default useAxiosSecure;
