import { useState, useMemo } from "react";

function Example() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const factorial = (n) => {
        console.log("Calculando factorial...");
        for (let i = 0; i < 1000000000; i++) {
            n += 1;
        }
        return n;
    }

    const memoizedFactorial = useMemo(() => factorial(count), [count]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-500 text-white rounded mb-4">Incrementar Contador</button>
            <p>Resultado de operacion: {memoizedFactorial}</p>
            <div className="mb-4">
                <label className="block mb-2">Contador:</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
        </div>
    );
}

export default Example;
        