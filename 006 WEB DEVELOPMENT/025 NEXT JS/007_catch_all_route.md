## Catch all route :
[...filePath]

Note : HardCoded page will gate more priority.

```
localhost:3000/a/b/c/d/e/f/g    //infinite
```
```jsx
export default async function UserPage(params) {

    const {filePath} = await params;
    return (
        <>
            <h1> File Path : /{filePath.join("/")}</h1>
        </>
    );
}
```


### Nesting catch :
Create this in inside another folder :


## Optional Catch all route :
FOLDER :
```
app
    file
        [[...filePath]]
            page.js

```

Note : Optional catch all route is not possible in root(like app).




# Next.js Catch-All Routes Notes

This note explains the difference between Catch-All and Optional Catch-All routes in the Next.js App Router.

⸻

1️⃣ Required Catch-All Route – [...filepath]

📁 Folder Structure
```
app/
 └── files/
     └── [...filepath]/
         └── page.jsx
```
🔗 URL Behavior

URL	filepath value
/files/a	["a"]
/files/a/b	["a", "b"]
/files	❌ 404

🧾 Example Code
```js
export default async function Page({ params }) {
  const { filepath } = await params;
  return <pre>{JSON.stringify(filepath, null, 2)}</pre>;
}
```
✅ Use When
	•	At least one path segment is required
	•	Base route (/files) should not exist

⸻

2️⃣ Optional Catch-All Route – [[...filepath]]

📁 Folder Structure
```
app/
 └── files/
     └── [[...filepath]]/
         └── page.jsx
```
🔗 URL Behavior

URL	filepath value
/files	undefined
/files/a	["a"]
/files/a/b	["a", "b"]

🧾 Example Code
```js
export default async function Page({ params }) {
  const { filepath } = await params;

  return (
    <div>
      {filepath ? filepath.join("/") : "Files Home"}
    </div>
  );
}
```
✅ Use When
	•	Base route should work (/files)
	•	Same page handles home + nested paths

⸻

🔑 Key Differences

Feature	[...filepath]	[[...filepath]]
Catch multiple segments	✅	✅
Base route works	❌	✅
filepath type	string[]	`string[]


⸻

🧠 One-Line Rule

Double brackets make the route optional.

⸻

📌 Summary
	•	[...slug] → requires at least one segment
	•	[[...slug]] → works with or without segments

⸻

End of Notes