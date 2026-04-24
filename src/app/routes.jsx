import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Nav from "../components/ui/Nav";
import Login from "../page/Login";
import Home from "../page/Home";
import Contact from "../page/Contact";

function RoutesApp() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <AppRoutes />
            </div>
        </Router>
    );
}

function AppRoutes() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/login" && <Nav />}
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default RoutesApp;