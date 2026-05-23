import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_POST_URL || "https://jsonplaceholder.typicode.com/";

const postApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

postApi.interceptors.request.use(
  (config) => {
    console.log("Solicitud enviada:", config);
    return config;
  },
  (error) => {
    console.error("Error en la solicitud:", error);
    return Promise.reject(error);
  },
);

postApi.interceptors.response.use(
  (response) => {
    console.log("Respuesta recibida:", response);
    return response;
  },
  (error) => {
    console.error("Error en la respuesta:", error);
    return Promise.reject(error);
  },
);

export default postApi;
