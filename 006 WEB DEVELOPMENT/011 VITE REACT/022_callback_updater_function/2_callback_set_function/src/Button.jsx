import { useState } from "react";
export default function Button() {
    let [count, setCount] = useState(0);

    const incCount = (() => {
        // using call back for asynchronus function
        setCount((currCount)=>{
            return currCount+1;
        });
        setCount((currCount)=>{
            return currCount+1;
        });
        console.log(count); //when count is 1, in console it show 0 (count -1)
    })

    return(
       <>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
       </>
    );
}

