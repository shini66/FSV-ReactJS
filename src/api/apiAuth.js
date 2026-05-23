import fakeStoreApi from "../services/fakeStoreApi";

export async function apiLogin(username, password) {
    try {
        const response = await fakeStoreApi.post("/auth/login", {
            username: username,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
}

export async function apiLogout() {
    try {
        localStorage.removeItem("token");
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        throw error;
    }
}
