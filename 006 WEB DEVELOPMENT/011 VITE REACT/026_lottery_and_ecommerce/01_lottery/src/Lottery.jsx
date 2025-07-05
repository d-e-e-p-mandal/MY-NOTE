import { useState } from "react";
import "./Lottery.css";
import { generateTicket, sum } from "./helper.js";


export default function Lottery() {
    //let [ticket, setTicket] = useState([0, 0, 0]);
    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinning = (sum(ticket) === 15) ;

    return (
        <>
            <h1>Lottery Game </h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3> {isWinning && "Congratulation, you won!"} </h3>
        </>
    )
}