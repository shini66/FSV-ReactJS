import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ui/Buttom.jsx";
import Input from "../components/ui/Input.jsx";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate("/");
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Inicio de Sesión</h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-center">
                <div className="mb-4 ali">
                    <Input type="text" label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input type="password" label="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <Button type="submit" label="Ingresar" className="my-3" />
                </div>
            </form>
        </div>
    );
}

export default Login;