# Loading :
```js
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
```


```js
"use client";

import { useEffect, useState } from "react";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      await sleep(1500); // delay fetch
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await res.json();
      setData(json);
    }
    load();
  }, []);

  if (!data) return <p>Loading...</p>;

  return <h1>{data.title}</h1>;
}
```
```code
app/
  posts/
    layout.js
    loading.js
    page.js
```
```js
export default function Loading() {
  return <p>Loading posts...</p>;
}
```