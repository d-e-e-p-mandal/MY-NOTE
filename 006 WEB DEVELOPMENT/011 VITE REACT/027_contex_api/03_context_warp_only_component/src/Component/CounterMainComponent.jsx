import React, { useState, useContext } from "react";
import {CounterContext} from "../Context/CounterContext";
import {MessageContext} from "../Context/MessageContext";

import CComponent from "./CComponent";
import FComponent from "./FComponent";

export default function CounterMainComponent() {
    const [counter, setCounter] = useState(0);
    const increment = ()=>{
        setCounter(counter+1);
    }

    const decrement = ()=>{
        setCounter(counter-1);
    }

    return(
        <div>
            <h1> Main Component </h1>
            <h2>{counter}</h2>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
            <hr />
            <CounterContext.Provider value = {{counter, setCounter}}>
                <FComponent/>
                <hr />
            </CounterContext.Provider>

            <MessageContext.Provider value = {"Hlw World"}>
                <CComponent/>
                <hr />
            </MessageContext.Provider>

        </div>
    )

}