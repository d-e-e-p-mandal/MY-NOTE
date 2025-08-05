import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "Deep Mandal",
        userName: ""
    });
    const handleChange = (event) => {
        const field = event.target.name;
        const newVal = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [field]: newVal
        }));
    };
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with formData
        console.log("Form Submitted!");
        console.log("Full Name:", formData.fullName);
        console.log("Username:", formData.userName);
        
        alert(`Submitted:\nName: ${formData.fullName}\nUsername: ${formData.userName}`);
        setFormData({
            fullName : "",
            userName : ""
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Enter Your Name:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="userName">Enter Username:</label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Enter username"
                    value={formData.userName}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}