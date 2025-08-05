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

        <div>
            <label htmlFor="fullname"> Enter Your Name : </label>
            <input type="text" id="fullname" placeholder="Enter full Name" value={fullName} onChange={handleNameChange}/>
        </div>
        <button>Submit</button>
        </form>
    )
}