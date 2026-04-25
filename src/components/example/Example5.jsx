import { useRef } from "react";
import { useCounter } from "../../hooks/useCounter";

function Example5() {
    const { count, increment } = useCounter();
    const nodeRef = useRef(null);

    const handleIncrement = () => {
        increment();
        nodeRef.current += 1;
        console.log("Valor del contador:", count);
        console.log("Valor del ref:", nodeRef.current);
    };

    return (
        <div>
            <h1>Contador (Estado): {count}</h1>
            <button onClick={handleIncrement}>Incrementar</button>
        </div>
    );
}

export default Example5;