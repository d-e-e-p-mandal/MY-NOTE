import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        id: 1001,
        name: "Deep Mandal"
    });

    const [details, setDetails] = useState([]);

    const handleForm = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const exists = details.some((item) => item.id === formData.id);

        if (exists) {
            alert("❌ ID already exists!");
            return; // stop here, don’t add duplicate
        }
        setDetails((prev) => (
            [...prev, formData]
        ))
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    Enter Name :
                    <input type="text" value={formData.name} onChange={handleForm} name="name" />
                </div>
                <div>
                    Enter Id :
                    <input type="text" value={formData.id} onChange={handleForm} name="id" />
                </div>
                <div><button type="submit">Submit</button></div>
            </form>
            <div> Details :
                <ul>
                    {details.map((item, index) => (
                        <li key={index}>
                            Name: {item.name}, Id: {item.id}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}