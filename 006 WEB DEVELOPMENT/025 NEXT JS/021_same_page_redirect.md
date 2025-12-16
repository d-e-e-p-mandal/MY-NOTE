

✅ Best & SIMPLEST way (React-like): State-based rendering

This is exactly how React does it.

Example: Tabs in the same page

"use client";

import { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState("home");

  return (
    <>
      <nav>
        <button onClick={() => setTab("home")}>Home</button>
        <button onClick={() => setTab("about")}>About</button>
      </nav>

      {tab === "home" && <h1>Home Content</h1>}
      {tab === "about" && <h1>About Content</h1>}
    </>
  );
}

✔ Same page
✔ No routing
✔ Fast
✔ Pure React behavior

⸻

✅ Next.js way using <Link> but SAME page: Query Params

(Recommended when you want URL to change)

URL example:

/services?tab=web
/services?tab=mobile

Code

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "web";

  return (
    <>
      <nav>
        <Link href="?tab=web">Web</Link>
        <Link href="?tab=mobile">Mobile</Link>
      </nav>

      {tab === "web" && <h1>Web Services</h1>}
      {tab === "mobile" && <h1>Mobile Services</h1>}
    </>
  );
}

✔ Same route
✔ URL updates
✔ Page does NOT reload
✔ SEO friendly

⸻

❌ What you should NOT expect from <Link>

<Link href="/about">About</Link>

❌ This will always load a different route
❌ Not same-page rendering

⸻

🆚 Which approach to choose?

Use case	Best option
Simple UI switch	useState
Tabs with URL	Query params
SEO + shareable	Query params
Forms / filters	State


⸻

🧠 Golden Rule (Remember this)

- Next.js Link = route change
- Same-page render = state OR query params
- React-like behavior = client component


⸻

✅ One-line summary (Interview-ready)

To render content inside the same page in Next.js, use client-side state or query parameters instead of navigating to a new route with <Link>.

