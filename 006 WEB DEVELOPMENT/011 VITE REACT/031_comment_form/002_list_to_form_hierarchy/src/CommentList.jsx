import { useState } from "react";
import CommentForm from "./CommentForm";


export default function CommentList() {
    const [comments, setComments] = useState([]);

    const addNewComment = (formData) => {
        event.preventDefault();
        setComments((prev) => ([...prev,formData]));
    };
    

    return (
        <>  
            <div>
                List :
                <ul>
                    {comments.map((comment, index)=>(
                        <li key={index}>
                            Username : {comment.username} <br/>
                            Remarks : {comment.remarks}   <br/>
                            Ratings : {comment.ratings}
                        </li>
                    ))}
                </ul>
            </div>
            <CommentForm addNewComment={addNewComment}/>
        </>
    );
}