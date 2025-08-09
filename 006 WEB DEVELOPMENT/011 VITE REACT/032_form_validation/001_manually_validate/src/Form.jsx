import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        userid :1001,
        username : "UserName",
        roll :1
    });

    const [userList,setUserList] = useState([]);

    const handleForm = (event)=>{
        const {name, value} = event.target;
        console.log(event.target.name);
        console.log(value);
        
        setFormData((prev)=>({
            ...prev,
            [name] : value
        }))
    };
    
    const handleSubmit = (event)=> {
        event.preventDefault();

        // form validation : when submit 
        if (formData.username.trim() === "") {
            alert("Username is required");
            return;
        }

        setUserList((prev)=>([...prev,formData]))
    }

    return (
        <>
            <h3>Form</h3>
            <form action="" onSubmit={handleSubmit}>
                <div> Id : 
                    <input type="text" name="userid" value={formData.userid} onChange={handleForm} />
                </div>
                <div> Name : 
                    <input type="text" name="username" value={formData.username} onChange={handleForm}/>
                </div>
                <div> Roll : 
                    <input type="text" name="roll" value={formData.roll} onChange={handleForm} />
                </div>
                <button type="submit"> Submit Form</button>

                <div> User List :

                    <ul>{userList.map(( user, index)=> (
                        <li key={index}> {user.userid} <br/>
                                         {user.username} <br/>
                                         {user.roll}
                        </li>
                    ))}
                    
                    </ul>
                </div>
            </form>
        </>
    )
}