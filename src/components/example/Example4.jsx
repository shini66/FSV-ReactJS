import { useRef } from "react";

function Example4() {
    const nodeRef = useRef(null);

    const focusInput = () => {
        nodeRef.current.focus();
    };

    return (
        <div>
            <input ref={nodeRef} type="text" placeholder="Nuevo valor.." />
            <button onClick={focusInput}>Mostrar valor</button>
        </div>
    );
}

export default Example4;