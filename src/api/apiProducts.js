import fakeStoreApi from "./services/fakeStoreApi.js";

export async function apiProductList() {
    try {
        const response = await fakeStoreApi.get("/products");
        return response.data;
    } catch (error) {
        console.error("Error al obtener la lista de productos:", error);
        throw error;
    }
}

export async function apiProductDetail(id) {
    try {
        const response = await fakeStoreApi.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el detalle del producto con id ${id}:`, error);
        throw error;
    }
}
