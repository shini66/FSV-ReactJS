import Input from "../components/ui/Input";
import Button from "../components/ui/Buttom";
import fetchData from "../helpers/fetch";

function Post() {

    fetchData("/posts/1")
        .then(data => {
            document.getElementById("post").innerText = `Título: ${data.title}\nContenido: ${data.body}`;
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });


    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-md" id="post">
            
        </div>
    );
}

export default Post;