

import { useState } from 'react'

export default function Ludobox() {
    const [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

    let updateBlue = () => {
        console.log(`Blue Moves : ${moves.blue}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }; // ... spread operaor
        });
    }

    let updateGreen = () => {
        console.log(`Blue Moves : ${moves.green}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 };
        });
    }
    let updateYellow = () => {
        console.log(`Blue Moves : ${moves.yellow}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });
    }

    let updateRed = () => {
        console.log(`Blue Moves : ${moves.red}`);
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };
        });
    }

    /* //if we don't use return we will use parenthsis()
    const incrementMove = (color) => {
        setMove((prevMoves) => ({
            ...prevMoves,
            [color]: prevMoves[color] + 1,
        }));
    };
    */

    return (
        <>
            <p>Blue Moves : {moves.blue}</p>
            <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

            <p>Blue Moves : {moves.green}</p>
            <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>

            <p>Blue Moves : {moves.yellow}</p>
            <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>

            <p>Blue Moves : {moves.red}</p>
            <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
        </>
    )
}