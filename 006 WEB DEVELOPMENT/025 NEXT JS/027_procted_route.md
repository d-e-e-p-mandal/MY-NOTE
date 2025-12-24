
## METHOD 1: Protect Entire Folder using layout.tsx (BEST)

If a folder has a layout.tsx, all pages inside it automatically inherit protection.

📁 Folder Structure
```
app/
 ├─ dashboard/
 │   ├─ layout.tsx   ✅ PROTECTED HERE
 │   ├─ page.jsx
 │   ├─ settings/
 │   │   └─ page.jsx
 │   └─ profile/
 │       └─ page.jsx
 ├─ login/
 │   └─ page.jsx
```

⸻

📁 app/dashboard/layout.tsx
```ts
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <section>
      {children}
    </section>
  );
}
```
✔️ Result
	•	/dashboard
	•	/dashboard/settings
	•	/dashboard/profile

👉 ALL are protected automatically

✅ Secure
✅ Server-side
✅ No duplication

⸻

## METHOD 2: Middleware Folder Protection (GLOBAL & FAST)

Best when you want edge-level protection.

📁 middleware.ts
```ts
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
```
✔️ Result
	•	Any route under /dashboard/* is blocked
	•	Runs before page loads

⸻

## METHOD 3: Protect Only One Page (NOT Folder)

If you protect only page.jsx, sub-routes will NOT be protected ❌

❌ Example (Wrong for folder)
```ts
// app/dashboard/page.jsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  if (!cookies().get("token")) redirect("/login");
  return <h1>Dashboard</h1>;
}
```
🚫 /dashboard/settings → NOT protected
🚫 /dashboard/profile → NOT protected

⸻

🏆 BEST PRACTICE SUMMARY

Requirement	Best Choice
Protect entire folder	✅ layout.tsx
Protect globally	✅ middleware.ts
Protect single page	page.jsx
UI-only protection	Client component


⸻

🎯 Recommendation for YOU (LMS / Dashboard)

Since your app has:
	•	Student / Faculty / Admin dashboards
	•	Nested routes

👉 Use this combo:
	•	✔️ layout.tsx → folder protection
	•	✔️ middleware.ts → role-based redirect

⸻

### BONUS: Role-Based Folder Protection
```ts
const role = cookies().get("role")?.value;

if (role !== "admin") {
  redirect("/unauthorized");
}
```

⸻
