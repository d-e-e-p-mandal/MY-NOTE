import { useState } from "react";
export default function Button() {
    let [count, setCount] = useState(0);

    function incCount() {
        /* setCount this is asynchronous funtion count not immediately update,
        it update when rendering, show we use call back funtion */

        
        setCount(count+1); 
        setCount(count+1); 
        setCount(count+1); 
        setCount(count+1); 
        //it update only 1 : setCounter update only counter + 1, even write more than one time

        
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