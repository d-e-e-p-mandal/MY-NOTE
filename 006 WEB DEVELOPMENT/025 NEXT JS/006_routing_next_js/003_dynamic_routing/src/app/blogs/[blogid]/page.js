export default async function Page({ params, searchParams }) {
    const {blogid }= await params;

    return (
      <div>
            <h1>Blog id : {blogid}</h1>
      </div>
    );
  }