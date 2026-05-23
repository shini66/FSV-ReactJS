import jsonPlaceholder from "../services/jsonPlaceholderApi.js";

async function apiPostList(){
    try {
        const response = await jsonPlaceholder.get("/posts");
        return response.data;
    } catch (error) {
        console.error("Error al obtener la lista de posts:", error);
        throw error;
    }
}

export { apiPostList };