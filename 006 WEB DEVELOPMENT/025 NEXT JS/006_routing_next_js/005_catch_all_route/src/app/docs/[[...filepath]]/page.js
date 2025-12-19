export default async function Page({ params }) {
    const { filepath } = await params;
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Docs Page</h1>
  
        {filepath ? (
          <p>Path: {filepath.join(" / ")}</p>
        ) : (
          <p>Docs Home Page</p>
        )}
      </div>
    );
  }