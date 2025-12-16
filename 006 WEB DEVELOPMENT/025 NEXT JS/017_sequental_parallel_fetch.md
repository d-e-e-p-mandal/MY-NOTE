# sequental 

UserPosts.js
```js
export default async function UserPosts() {
  const user = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  ).then(res => res.json());

  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
  ).then(res => res.json());

  return <h1>{user.name}</h1>;
}
```

page.js
```js
import { Suspense } from "react";
import UserPosts from "./UserPosts";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserPosts />
    </Suspense>
  );
}
```


# parallel

```js
export default async function Page() {
  const [userRes, postsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
  ]);

  const user = await userRes.json();
  const posts = await postsRes.json();

  return (
    <>
      <h1>{user.name}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
```

Better -> 
```js
export default async function Page() {
  // fetch in parallel
  const [userRes, postsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
  ]);

  // parse JSON in parallel
  const [user, posts] = await Promise.all([
    userRes.json(),
    postsRes.json(),
  ]);

  return (
    <>
      <h1>{user.name}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
```

better ->
```js
async function fetchData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json(); // return parsed JSON
}



export default async function Page() {
  const [user, posts] = await Promise.all([
    fetchData("https://jsonplaceholder.typicode.com/users/1"),
    fetchData("https://jsonplaceholder.typicode.com/posts?userId=1"),
  ]);

  return (
    <>
      <h1>{user.name}</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
```

⚠️ When NOT to Use Parallel Fetch

❌ If second API depends on first result