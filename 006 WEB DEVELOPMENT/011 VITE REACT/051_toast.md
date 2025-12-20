Got it 👍 You mean toast notification using “toastify / toasty”.
Most people mean react-toastify (very common).
Here is the SIMPLEST working example 👇

⸻

✅ Using react-toastify (very easy)

1️⃣ Install

npm install react-toastify


⸻

2️⃣ Add ToastContainer (ONLY ONCE)

👉 Put this in app/layout.js or app/page.js

"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <ToastContainer position="top-right" />
    </>
  );
}


⸻

3️⃣ Use toast in any page/component

"use client";

import { toast } from "react-toastify";

export default function Page() {
  return (
    <button onClick={() => toast.success("Hello Toast!")}>
      Show Toast
    </button>
  );
}


⸻

🔥 Common toast types

toast("Normal message");
toast.success("Success!");
toast.error("Error!");
toast.warning("Warning!");
toast.info("Info!");


⸻

⏳ Toast with loading

toast.loading("Loading...");


⸻

🧠 Important rules
	•	✅ Toast works only in client components
	•	✅ <ToastContainer /> must be added once
	•	❌ Don’t add ToastContainer in every page

⸻

✅ One-line summary

Install react-toastify → add ToastContainer → call toast() on action.

If you want:
	•	toast on form submit
	•	auto close timing
	•	custom style / theme
	•	toast with async promise

tell me 👍