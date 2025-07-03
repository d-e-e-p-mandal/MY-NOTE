import { useState } from "react";
export default function Button() {
    let [count, setCount] = useState(0);

    function incCount() {
        // using call back for asynchronus function
        setCount((c)=>{
            return c+1;
        });
        setCount((c)=>{
            return c+1;
        });
        console.log(count); //when count is 1, in console it show 0 (count -1)
    }

    return(
       <>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
       </>
    );
}


//to update we use hooks