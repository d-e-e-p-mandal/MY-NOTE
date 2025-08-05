export default function CommentList({ comments, onDelete }) {
    return (
        <div>
            <h3>All Comments:</h3>
            {comments.length === 0 ? (
                <p>No comments yet.</p>
            ) : (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.username}</strong> ({comment.rating}/5):<br />
                            {comment.remarks}
                            <br />
                            <button onClick={() => onDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}