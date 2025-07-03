import { useState } from 'react'

export default function Ludobox() {
    const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

    //if we don't use return we will use parenthsis()
    const incrementMove = (color) => {
        setMoves((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1, //// same as obj["blue"] = 5; dynamic use [] hardcode us . operator
        }));
    };
    

    return (
        <>
            <p>Blue Moves : {moves.blue}</p>
            <button style={{ backgroundColor: "blue" }} onClick={() => incrementMove('blue')}>+1</button>

            <p>Blue Moves : {moves.green}</p>
            <button style={{ backgroundColor: "green" }} onClick={() => incrementMove('green')}>+1</button>

            <p>Blue Moves : {moves.yellow}</p>
            <button style={{ backgroundColor: "yellow", color: "black" }} onClick={() => incrementMove('yellow')}>+1</button>

            <p>Blue Moves : {moves.red}</p>
            <button style={{ backgroundColor: "red" }} onClick={() => incrementMove('red')}>+1</button>
        </>
    )
}