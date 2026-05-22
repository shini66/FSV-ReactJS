import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Buttom";
import useSendWhatsApp from "../hooks/sendWhatsApp";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { isSending, sendWhatsApp } = useSendWhatsApp();

    const submitForm = (e) => {
        e.preventDefault();
        sendWhatsApp(name, email, message);
    }


    return (
        <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
            <form className="space-y-4" onSubmit={submitForm}>
                <div className="mb-4">
                    <Input type="text" label="Nombre" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <Input type="email" label="Correo Electrónico" placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <Input type="textarea" label="Mensaje" placeholder="Tu mensaje" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="mb-4 text-center">
                    <Button type="submit" label="Enviar" className="my-3" disabled={isSending} />
                </div>
            </form>
        </div>
    );
}

export default Contact;