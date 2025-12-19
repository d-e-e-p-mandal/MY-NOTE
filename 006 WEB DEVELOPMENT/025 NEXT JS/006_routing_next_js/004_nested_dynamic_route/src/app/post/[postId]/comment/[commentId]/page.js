export default async function Page({ params }) {
    const { postId, commentId } = await params;
  
    return (
      <div>
        <h1>Post ID: {postId}</h1>
        <h2>Comment ID: {commentId}</h2>
      </div>
    );
  }