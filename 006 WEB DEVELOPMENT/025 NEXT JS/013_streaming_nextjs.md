# Streaming : Use suspense

```js
import { Suspense } from "react";
<Suspense fallback={<p>Loading...</p>}>
  <Component />
</Suspense>

```


📄 app/page.js
```js
import { Suspense } from "react";
import Posts from "./Posts";

export default function Page() {
  return (
    <>
      <h1>Home</h1>

      <Suspense fallback={<p>Loading posts...</p>}>
        <Posts />
      </Suspense>
    </>
  );
}
```

📄 app/Posts.js
```js
export default async function Posts() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

✅ Example 2: Partial Loading (Best UX)

```js
<Suspense fallback={<p>Loading user info...</p>}>
  <UserProfile />
</Suspense>

<Suspense fallback={<p>Loading comments...</p>}>
  <Comments />
</Suspense>
```


✅ Example 3: Suspense with Dynamic Import

```js
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeavyComponent = dynamic(() => import("./HeavyComponent"));

export default function Page() {
  return (
    <Suspense fallback={<p>Loading heavy component...</p>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

| Feature | Suspense | useEffect |
|--------|----------|-----------|
| Runs on server | ✅ Yes | ❌ No |
| Streaming support | ✅ Yes | ❌ No |
| SEO friendly | ✅ Yes | ❌ No |
| Recommended in Next.js | ✅ Yes | ❌ No |