
let apiUrl = import.meta.env.VITE_API_URL;

async function fetchData(endpoint) {
    try {
        const repose = await fetch(`${apiUrl}${endpoint}`);

        if (!repose.ok) {
            throw new Error('Error en la respuesta: '+repose.status);
        }

        const data = await repose.json();
        return data;
    } catch (error) {
        console.error("Error en fetchData:", error);
        throw error;
    }
}

export default fetchData;