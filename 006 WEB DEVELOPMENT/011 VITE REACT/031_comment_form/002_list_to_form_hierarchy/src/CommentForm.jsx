import { useState } from "react";
export default function CommentForm({addNewComment}) {
    const [formData, setFormData] = useState({
        username: "abcd",
        remarks: "aaaa",
        retaings : 5
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewComment(formData);
        // Optionally reset form
        setFormData({
            username: "",
            remarks: "",
            ratings: 0
        });
    };


    return (
        <>
            <form onSubmit= {handleSubmit}>
                username : <input type="text" id="username" name="username" onChange={handleChange}/> <br />
                Remarks : <input type="text" id="remarks" name="remarks" onChange={handleChange}/>    <br />
                Ratings : <input type="number" id="ratings" name="ratings" onChange={handleChange}/> <br />

                <button type="submit"> submit </button>
            </form>
        
        </>
    )
}