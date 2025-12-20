import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link href="/service">Service Home</Link>
      </p>

      <p>
        <Link href="/service/service-type">Service Type</Link>
      </p>

      <p>
        <Link href="/service/details">Service Details</Link>
      </p>
    </>
  );
}