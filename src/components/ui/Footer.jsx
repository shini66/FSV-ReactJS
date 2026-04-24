function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8 w-full">
            <div className="max-w-5xl mx-auto text-center">
                &copy; {new Date().getFullYear()} Clase React. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;