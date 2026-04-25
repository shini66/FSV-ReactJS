import { useCounter } from "../../hooks/useCounter";
import Button from "../ui/Buttom";

function Example6() {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h1>Contador: {count}</h1>
            <div className="space-x-5">
                <Button onClick={increment} label="Incrementar" />
                <Button onClick={decrement} label="Decrementar" />
                <Button onClick={reset} label="Reiniciar" />
            </div>
        </div>
    )
}

export default Example6;