You’re asking about this special App Router structure 👇

app/
 ├─ dashboard/
 │   ├─ layout.tsx
 │   ├─ @content/page.tsx
 │   ├─ @sidebar/page.tsx

This is called Parallel Routes in Next.js App Router.
I’ll explain it slowly + clearly, like React mental model.

⸻

🧠 What is @content and @sidebar?
	•	@content and @sidebar are named slots
	•	They render at the same time on the same page
	•	Think of them like multiple <Outlet /> in React Router

👉 Normal routing = one child
👉 Parallel routing = many children

⸻

🧩 How it works (big picture)

/dashboard
 ┌─────────────────────────────┐
 │  Sidebar   |   Content      │
 │  (@sidebar)|  (@content)    │
 └─────────────────────────────┘

✔ URL is same
✔ Layout stays same
✔ Only slot content changes

⸻

📁 Folder structure (full example)

app/
 ├─ dashboard/
 │   ├─ layout.tsx        👈 Parent (shell)
 │   ├─ page.tsx          👈 optional default
 │   ├─ @sidebar/
 │   │   └─ page.tsx      👈 Sidebar slot
 │   ├─ @content/
 │   │   └─ page.tsx      👈 Main content slot


⸻

🧠 layout.tsx (MOST IMPORTANT FILE)

This is where slots are placed.

export default function DashboardLayout({
  children,
  sidebar,
  content
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px" }}>
        {sidebar}
      </aside>

      <main style={{ flex: 1 }}>
        {content}
      </main>
    </div>
  );
}

📌 Slot names must match folder names
	•	@sidebar → sidebar
	•	@content → content

⸻

🧠 @sidebar/page.tsx

export default function Sidebar() {
  return (
    <ul>
      <li>Profile</li>
      <li>Settings</li>
      <li>Billing</li>
    </ul>
  );
}


⸻

🧠 @content/page.tsx

export default function Content() {
  return <h2>Dashboard Main Content</h2>;
}


⸻

🔁 Routing inside slots (ADVANCED 🔥)

You can have different pages inside each slot.

@content/
 ├─ page.tsx
 ├─ profile/
 │   └─ page.tsx
 ├─ settings/
 │   └─ page.tsx

URL:

/dashboard/profile

Only content slot changes, sidebar stays same.

⸻

🆚 React Router Comparison

React Router	Next.js
<Outlet />	{children}
Multiple outlets	Parallel routes
Layout Route	layout.tsx
Nested route	Nested folders


⸻

⚠️ Common mistakes

❌ Forgetting to accept slot props in layout.tsx
❌ Naming mismatch (@sideBar vs sidebar)
❌ Expecting URL to change for each slot automatically

⸻

✅ When should YOU use this?

✔ Dashboard
✔ Admin panel
✔ LMS (your case 👀)
✔ Sidebar + content layout
✔ Modals / drawers

⸻

🧠 Simple mental model

layout.tsx = skeleton
@slot = organs
URL = controller

⸻

If you want, tell me:
	•	Do you want sidebar fixed?
	•	Do you want content to change by URL or by click?
	•	Is this for dashboard / LMS / admin?

I’ll design the exact structure for your project 💪