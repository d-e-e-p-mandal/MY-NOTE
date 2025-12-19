import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>This is Home page</h1>

      <p>
        <Link href="/about">About</Link>
      </p>
    </>
  );
}