import { createContext, useState } from "react";

export const CounterContext = createContext(null); // use capital letter 1st character for export

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={ {count, setCount, name : "Deep Mandal"}}>
            {props.children}
        </CounterContext.Provider>
    )
}