## Next.js Error Handling – Simple Folder Structure (App Router)
Diagram Of Next js Error Handling :
```js
<Layout>
  <ErrorBoundary fallback={<Error />}>
    <Layout>
      <ErrorBoundary fallback={<Error />}>
        <Page />
      </ErrorBoundary>
    </Layout>
  </ErrorBoundary>
</Layout>
```
### 1️⃣ Global Error Handling
Handles errors for the entire app.

Server Side Error : Digest Method Provide

app/
├── error.js
├── layout.js
└── page.js

- `error.js` catches runtime errors
- Must be a Client Component (`"use client"`)

---

### 2️⃣ Route-Level Error Handling
Handles errors for a specific route only.

app/
├── dashboard/
│   ├── error.js
│   ├── page.js
│   └── layout.js
└── page.js

- Errors inside `/dashboard` are caught by `dashboard/error.js`
- Other routes are not affected

---

### 3️⃣ Nested Route Error Handling
More granular control.
```
app/
├── dashboard/
│   ├── settings/
│   │   ├── error.js
│   │   └── page.js
│   ├── page.js
│   └── error.js
```
- `settings/error.js` handles only `/dashboard/settings`
- `dashboard/error.js` handles other dashboard errors

---

### 4️⃣ Not Found Handling
For 404 pages.
```
app/
├── not-found.js
├── page.js
```
- Shown when route does not exist
- Can be triggered manually using `notFound()`

---

### 5️⃣ Loading + Error Together
Common real-world setup.
```
app/
├── products/
│   ├── loading.js
│   ├── error.js
│   └── page.js
```
- `loading.js` → shows loading UI
- `error.js` → catches fetch/render errors

---

### Key Notes
- `error.js` must include `"use client"`
- Errors bubble up to nearest `error.js`
- `not-found.js` is for 404, not runtime errors
- Works only in App Router

---

### One-line Summary
Next.js handles errors using `error.js` files placed at global or route levels, with automatic error boundaries.




# How to recover From Error Handling

#### Full page refresh :
```js
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>

      {/* 🔄 Full page refresh */}
      <button onClick={() => window.location.reload()}>
        Refresh Page (Full reload)
      </button>
    </div>
  );
}
```


#### 2 Dom refresh only 

```js
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      reset();            // 🔁 clear error boundary
      router.refresh();   // 🔄 re-fetch server data
    });
  };

  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={handleRetry}>
        Retry
      </button>
    </div>
  );
}
```



# Nested error Handling :

Parent also handle child Error


### Handle Error of layout :
Error.js File create in parent Directory



# Clinet Side Exception Error :

```js
"use client";

import { useState } from "react";

export default function About() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);

  return (
    <div>
      <button
        onClick={() => {
          // ❌ This will cause a client-side exception
          setFruits(null);
        }}
      >
        Click Me
      </button>

      {/* ❌ When fruits becomes null, map() throws error */}
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}
```

Error :
```
TypeError: Cannot read properties of null (reading 'map')
```

Handle It :

```js
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong on client side 🚨</h2>

      <p>{error.message}</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
```

or safe map :
```js
{Array.isArray(fruits) &&
  fruits.map((fruit) => (
    <p key={fruit}>{fruit}</p>
  ))}
```

clinet Side error handle like server side :

```js
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();

  const handleRetry = () => {
      reset();            // 🔁 clear error boundary
  };

  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={handleRetry}>
        Retry
      </button>
    </div>
  );
}
```




# Global Error Handling :

**work on production**:

```
app/
 ├── layout.js
 ├── global-error.js  ✅ (only at root)
 ├── page.js
 └── about/
     ├── page.js
     └── error.js
```

```js
"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h1>Something went wrong globally 🚨</h1>

        <p>{error.message}</p>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload Page (Hard Reset)
        </button>
      </body>
    </html>
  );
}

```



```
page.js error
   ↓
route error.js
   ↓
parent layout error.js
   ↓
global-error.js  ✅ (last catch)
```