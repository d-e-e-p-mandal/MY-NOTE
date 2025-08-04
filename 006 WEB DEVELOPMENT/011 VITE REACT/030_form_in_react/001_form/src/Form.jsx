import { useState } from "react";

export default function Form() {
    //let [fullName, setFullName] = useState(""); // full name empty initally
    let [fullName, setFullName] = useState("Deep Mandal"); // we set the default full name is Deep Mandal

    let handleNameChange = (event) =>{
        console.log(event.target.value);
        setFullName(event.target.value);
    };

    return (
        <form>
        <input type="text" placeholder="Enter full Name" value={fullName} onChange={handleNameChange}/>

        <button>Submit</button>
        </form>
    )
}