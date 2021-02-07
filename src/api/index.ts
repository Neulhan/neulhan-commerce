import axios from "axios";
import Cookies from "js-cookie";

// const API_ENDPOINT = process.env.API_URL_PRD;
const API_ENDPOINT = process.env.API_URL_DEV;

const api = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  withCredentials: true,
});

export default api;
