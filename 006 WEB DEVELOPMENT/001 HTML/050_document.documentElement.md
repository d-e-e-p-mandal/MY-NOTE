## What is document.documentElement?
document.documentElement refers to the root HTML element of the page.

👉 It is the <html> tag.

```html
<html>
  <head></head>
  <body></body>
</html>
```

```js
document.documentElement
```

✅ Common Uses (with examples)

1️⃣ Get page height
```js
document.documentElement.scrollHeight
```

2️⃣ Scroll to top
```js
document.documentElement.scrollTop = 0;
```

3️⃣ Toggle dark mode class
```js
document.documentElement.classList.add("dark");
document.documentElement.classList.remove("dark");
```

4️⃣ Access CSS variables
```js
getComputedStyle(document.documentElement)
  .getPropertyValue("--main-color");
```

document.body : <body>
document.documentElement : <html>


Next JS
	•	✅ Use only in client-side code
	•	Use inside "use client" + useEffect