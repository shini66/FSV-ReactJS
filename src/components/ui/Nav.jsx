import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
                <h1 className="text-white text-lg font-bold">
                    <Link to="/" className="text-white hover:text-gray-300">Clase React</Link>
                </h1>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white hover:text-gray-300">Inicio</Link></li>
                    <li><Link to="/post" className="text-white hover:text-gray-300">Artículos</Link></li>
                    <li><Link to="/about" className="text-white hover:text-gray-300">Acerca de</Link></li>
                    {localStorage.getItem("token") ? (
                        <li><Link onClick={() => { localStorage.removeItem("token"); window.location.reload(); }} className="text-white hover:text-gray-300">Cierre de sesión</Link></li>
                    ) : (
                        <li><Link to="/login" className="text-white hover:text-gray-300">Iniciar sesión</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;