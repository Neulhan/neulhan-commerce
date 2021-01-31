import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 1000,
  withCredentials: true,
});

export default api;
