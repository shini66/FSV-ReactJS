import {useState } from "react";

const url = "https://wa.me/595984732556?text=";

const formatMsg = (nombre, email, mensaje) => {
    const msg = `Nombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`;
    return encodeURIComponent(msg);
}

function useSendWhatsApp() {
    const [isSending, setIsSending] = useState(false);

    const sendWhatsApp = (nombre, email, mensaje) => {
        setIsSending(true);
        const encodedMessage = formatMsg(nombre, email, mensaje);
        window.open(`${url}${encodedMessage}`, "_blank");
        setIsSending(false);
    };

    return { isSending, sendWhatsApp };
}

export default useSendWhatsApp;