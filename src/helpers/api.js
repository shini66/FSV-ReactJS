import axios from "axios";

const api =  axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

api.interceptors.request.use(
    (config) => {
        console.log("Solicitud enviada:", config);
        return config;
    },
    (error) => {
        console.error("Error en la solicitud:", error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log("Respuesta recibida:", response);
        return response;
    },
    (error) => {
        console.error("Error en la respuesta:", error);
        return Promise.reject(error);
    }
);

export default api;