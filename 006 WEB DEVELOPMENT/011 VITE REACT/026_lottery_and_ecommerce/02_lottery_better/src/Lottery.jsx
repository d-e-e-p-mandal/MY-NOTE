import { useState } from "react";
import "./Lottery.css";
import { generateTicket} from "./helper.js";
import Ticket from "./Ticket";
import Button from "./Button";


export default function Lottery({n=3, winCondition}) { //export default function Lottery({n=3, winningSum=15}) {
    let [ticket, setTicket] = useState(generateTicket(n));
    //let isWinning = (sum(ticket) === winningSum) ;
    let isWinning = winCondition(ticket); //winCondition function pass as a props

    let buyTicket = () => {
        setTicket(generateTicket(n));
    };

    return (
        <>
            <h1>Lottery Game! </h1>
            <div className="lottery">
                <Ticket ticket={ticket} />
                {/* <button onClick={buyTicket}> Buy New Ticket</button> */}
                <Button action={buyTicket}/>  { /*event handling props send by action */}
            </div>
            <h3> {isWinning && "Congratulation, you won!"} </h3>
        </>
    )
}