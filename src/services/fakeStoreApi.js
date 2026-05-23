import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_STORE_URL || 'https://fakestoreapi.com';

const fakeStoreApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

fakeStoreApi.interceptors.request.use(
    (config) => {
        console.log("Solicitud enviada:", config);
        return config;
    },
    (error) => {
        console.error("Error en la solicitud:", error);
        return Promise.reject(error);
    }
);

fakeStoreApi.interceptors.response.use(
    (response) => {
        console.log("Respuesta recibida:", response);
        return response;
    },
    (error) => {
        console.error("Error en la respuesta:", error);
        return Promise.reject(error);
    }
);

export default fakeStoreApi;