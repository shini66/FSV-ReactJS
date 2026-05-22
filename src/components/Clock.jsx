import { useState, useEffect } from "react";

function ClockFull() {
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-200 p-4 rounded text-black text-center">
            <p>Hora: {time.toLocaleTimeString()}</p>
            <p>Fecha: {date.toLocaleDateString()}</p>
        </div>
    );

}

function ClockDisplay() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-200 p-4 rounded text-black text-center">
            <p>Hora: {time.toLocaleTimeString()}</p>
        </div>
    );
}

function DateDisplay() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-200 p-4 rounded text-black text-center">
            <p>Fecha: {date.toLocaleDateString()}</p>
        </div>
    );
}

export { ClockFull, ClockDisplay, DateDisplay };