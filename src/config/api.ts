const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://192.168.1.128:8000";

const apiConfig = {
  baseURL: API_BASE_URL,
};

export default apiConfig;
