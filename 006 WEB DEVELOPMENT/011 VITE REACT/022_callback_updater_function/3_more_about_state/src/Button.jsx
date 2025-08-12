import { useState } from "react";
export default function Button() {
    let [count, setCount] = useState(0);

    let randomNumber = ()=>{
        return Math.floor(Math.random);
    }

    function incCount() {
        // using call back for asynchronus function
        // setCount((c)=>{
        //     return c+1;
        // });
        // setCount((c)=>{
        //     return c+1;
        // });

        // 1.
        setCount(20);

        //2.
        setCount(randomNumber);

        //setCount(randomNumber()); //we don't use () in funtion call it generate number on each rendering but we need on call
        console.log(count); //when count is 1, in console it show 0 (count -1)
    }

    return(
       <>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
       </>
    );
}
