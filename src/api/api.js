import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(function conf(config) {
  const token = localStorage.getItem("token");

  const updatedConfig = config;
  updatedConfig.headers.Authorization = token ? `Bearer ${token}` : "";

  return updatedConfig;
});

export default api;
