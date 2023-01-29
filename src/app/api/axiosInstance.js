import axios from "axios";
//http://localhost:8080
//https://fasion4u-server.onrender.com
const baseURL = "https://fasion4u-server.onrender.com/";

export const axiosInstance = axios.create({
  baseURL,
});
// add configurations headers, timeout, etc.
export default axiosInstance;