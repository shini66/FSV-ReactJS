import { useReducer } from "react";
import Button from "../ui/Buttom";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Example6() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Contador: {state.count}</h1>
            <div className="space-x-5">
                <Button onClick={() => dispatch({ type: 'increment' })} label="Incrementar" />
                <Button onClick={() => dispatch({ type: 'decrement' })} label="Decrementar" />
                <Button onClick={() => dispatch({ type: 'reset' })} label="Reiniciar" />
            </div>
        </div>
    )
}

export default Example6;