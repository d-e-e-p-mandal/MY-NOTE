

✅ Link

What it does
	•	Navigates to another route
	•	Works like <a> but without page reload
	•	No styling awareness of active route

Example

import { Link } from "react-router-dom";

<Link to="/about">About</Link>

✔ Fast navigation
❌ Doesn’t know if route is active

⸻

✅ NavLink

What it does
	•	Same as Link
	•	Automatically knows if the route is active
	•	Used for menus / navbar

Example

import { NavLink } from "react-router-dom";

<NavLink to="/about">
  About
</NavLink>


⸻

⭐ Active Styling with NavLink (Most Important)

<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })}
>
  About
</NavLink>

or using class:

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active-link" : ""
  }
>
  About
</NavLink>

.active-link {
  font-weight: bold;
  color: red;
}


⸻

🆚 Difference Table (Easy to Remember)

| Feature | Link | NavLink |
|------|------|---------|
| Navigation | ✅ Yes | ✅ Yes |
| Page reload | ❌ No | ❌ No |
| Active route detection | ❌ No | ✅ Yes |
| Styling active link | ❌ No | ✅ Yes |
| Best use | Simple links | Navbar / menus |


⸻

🧠 When to use what?
	•	Use Link → simple navigation
	•	Use NavLink → navbar, sidebar, tabs

⸻
