import api from "../helpers/api";

async function apiPostList(){
    try {
        const response = await api.get("/posts");
        return response.data;
    } catch (error) {
        console.error("Error al obtener la lista de posts:", error);
        throw error;
    }
}

export { apiPostList };