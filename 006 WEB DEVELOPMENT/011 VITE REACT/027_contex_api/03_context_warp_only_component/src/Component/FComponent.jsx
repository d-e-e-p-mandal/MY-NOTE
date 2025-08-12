import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext"; // ✅ named import

export default function FComponent() {
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <h1>Function Component</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <hr />
            <Fchild />
        </div>
    );
}

function Fchild() {
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <h1>Function Child Component</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}