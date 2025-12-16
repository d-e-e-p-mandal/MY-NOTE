
```js
/^\d+$/
```

| Part | Meaning |
|------|--------|
| `/ /` | Start & end of regex |
| `^` | Start of the string |
| `\d` | Any digit (0–9) |
| `+` | One or more times |
| `$` | End of the string |


```js
const regex = /^\d+$/;

regex.test("123");   // true
regex.test("abc");   // false
regex.test("12a");   // false
```


File : app/not-found.js
```jsx
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}
```


#### Optional Manual Trigger :

```jsx
import { notFound } from "next/navigation";

export default function Page({ params }) {
  if (params.id !== "1") {
    notFound();
  }

  return <h1>Valid Page</h1>;
}
```


## Nested :
dynamic page :
[slug] supprot for dynamic :
    Create not-found page folder
Static page not support
