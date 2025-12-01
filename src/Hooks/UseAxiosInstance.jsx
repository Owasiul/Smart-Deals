import axios from "axios";

const axiosInstrance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxios = () => {
  return axiosInstrance;
};
export default useAxios;
