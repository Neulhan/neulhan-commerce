import axios from "axios";

const API_ENDPOINT = process.env.API_URL;

const api = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  withCredentials: true,
});

export default api;
