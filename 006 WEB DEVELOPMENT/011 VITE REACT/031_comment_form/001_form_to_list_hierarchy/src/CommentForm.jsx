import { useState } from "react";
import CommentList from "./CommentList";

export default function CommentForm() {
    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: ""
    });

    const [comments, setComments] = useState([]);

    const handleChange = (event) => {
        const { field, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.username || !formData.remarks || !formData.rating) {
            alert("Please fill in all fields.");
            return;
        }

        setComments((prevComments) => [...prevComments, formData]);

        setFormData({
            username: "",
            remarks: "",
            rating: ""
        });
    };

    const handleDeleteComment = (indexToDelete) => {
        setComments((prev) => prev.filter((comment, index) => index !== indexToDelete));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="remarks">Remarks:</label>
                    <textarea
                        id="remarks"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="rating">Rating (1–5):</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        value={formData.rating}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit Comment</button>
            </form>

            <hr />

            {/* Pass the state and handler directly */}
            <CommentList comments={comments} onDelete={handleDeleteComment} />
        </div>
    );
}