
## Hydration Error – Notes to Remember

- Hydration error happens when server-rendered HTML does not match client-rendered HTML
- React shows this error during client-side hydration
- Common causes:
  - Using browser-only APIs (window, document) on the server
  - Rendering random values (Math.random(), Date.now())
  - Using different data on server and client
  - Conditional rendering based on client-only state
- Example of wrong code:
  - Rendering `new Date()` directly in JSX
- Fixes:
  - Use `"use client"` when needed
  - Use useEffect for browser-only logic
  - Make server and client output identical
  - Use dynamic import with `ssr: false` for client-only components
- Always ensure the first render is the same on server and client


## FIX


### Fix 1: Use useEffect (Correct)
```js
export default function Page() {
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}
```
```js
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return <h1>{time}</h1>;
}
```


### Fix 2: Generate random value on client only
```JS
export default function Page() {
  return <p>{Math.random()}</p>;
}
```

```js
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [num, setNum] = useState(null);

  useEffect(() => {
    setNum(Math.random());
  }, []);

  return <p>{num}</p>;
}
```


### Fix 3: Use "use client" + useEffect
```js
export default function Page() {
  return <p>{window.innerWidth}</p>;
}
```

```js
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <p>Width: {width}</p>;
}
```


### Use dynamic import (Client-only)

```js
export default function Page() {
  if (typeof window !== "undefined") {
    return <h1>Client</h1>;
  }
  return <h1>Server</h1>;
}
```

```js
import dynamic from "next/dynamic";

const ClientOnly = dynamic(() => import("./ClientOnly"), {
  ssr: false,
});

export default function Page() {
  return <ClientOnly />;
}
```


#### suppressHydrationWarning (When mismatch is expected)
```js
export default function Page() {
  return (
    <h1 suppressHydrationWarning>
      {new Date().toLocaleTimeString()}
    </h1>
  );
}
```