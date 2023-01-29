import axios from "axios";
//http://localhost:8080
//https://fasion4u-server.onrender.com
const baseURL = "http://localhost:8080/api/v1/";

export const axiosInstance = axios.create({
  baseURL,
});
// add configurations headers, timeout, etc.
export default axiosInstance;
