
## CSS Override in Next.js (Simple Explanation)

In Next.js, Global CSS is applied first, and child or component-level CSS can override it.

🔹 Rule

More specific styles override less specific styles

⸻

📌 Example

1️⃣ Global CSS (globals.css)
```css
p {
  color: red;
}
```
This applies to all <p> tags in the app.

⸻

2️⃣ Child / Component CSS (page.module.css)
```css
.text {
  color: blue;
}
```
```js
import styles from "./page.module.css";

export default function Page() {
  return <p className={styles.text}>Hello</p>;
}
```
✅ Result
	•	Global says: red
	•	Child says: blue
	•	Final color: BLUE ✔️

⸻

Why this happens?
	•	CSS follows specificity rules
	•	Class selectors (.text) are more specific than element selectors (p)
	•	Child styles are applied after global styles

⸻



# CSS Module (Simple)

CSS Modules are used to write component-specific CSS in Next.js.

They prevent style conflicts by keeping CSS local to a component.

⸻

📌 How it works
	•	File name must end with:
👉 *.module.css
	•	Styles apply only to the component that imports them
	•	Same class name can be reused in different files safely
    -   Does not work tag componect only work on class

⸻

📄 Example

page.module.css
```
.title {
  color: blue;
}
```
page.js
```js
import styles from "./page.module.css";

export default function Page() {
  return <h1 className={styles.title}>Hello</h1>;
}
```

⸻

✅ Result
	•	Style applies only to this <h1>
	•	No effect on other components

⸻

🎯 One-Line Answer

CSS Modules in Next.js provide locally scoped CSS to avoid global style conflicts.

⸻


### SCSS set Up :

```bash
npm install sass
```
```css
/* page.module.scss */
.title {
  color: blue;
}
```
```js
import styles from "./page.module.scss";

<h1 className={styles.title}>Hello</h1>;
```


# Tailwind set-up :
- set up at creating time
- manual set up