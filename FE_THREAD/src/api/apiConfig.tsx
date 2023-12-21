import axios, { AxiosInstance } from "axios";

const apiConfig: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export default apiConfig;
