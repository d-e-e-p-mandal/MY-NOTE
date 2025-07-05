import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}) {
    return (
        <>
            <p>Ticket : </p>
            <div className="Ticket">
                {ticket.map((num,index) => (
                    <TicketNum num = {num} key = {index}/>
                ))}
            </div>
            {/* <TicketNum/> */}
        </>
    )
}