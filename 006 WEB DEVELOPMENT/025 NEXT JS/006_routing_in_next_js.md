# Routing :

Create Folder Name (routing page name) inside app folder.
Then write contennt in `page.js`

Create About page :
Disadvantage : It will load the page or refresh
```html
 <a href="/about">About</a>
```

```
app
    HOME
        page.js
    About
        page.js
```

```jsx
export default function About() {
    return (
        <>
            <h1>This is about page</h1>
        </>
    )
}
```
Note : function/component name About is not nessesary. It same as directory name as recomended.

```jsx
<Link href="/about">About</Link>

```


# Nested Routing :
```
app
    HOME
        page.js
    service
        page.js
        web-service
            page.js
        app-service
            page.js
```
```jsx
<Link href="/about/wev-service">About</Link>

```


# Dynamic Routing :
[slug]


##### Params and search params
```js
export default async function Home(props) {
    console.log(props);
  return (
    <>
        <h1>This is Home Page</h1>
    </>
  );
}

```
output :
```code
Object {
  params: ReactPromise {...},
  searchParams: ReactPromise {...}
}



```code
http://localhost:3000/user/42?role=admin&status=active
```
slag : [id] 
? = searchParams

```jsx
export default async function UserPage({ params, searchParams }) {
    console.log("params:", await params);
    console.log("searchParams:", await searchParams);

    return (
        <>
            <h1>User ID: {params.id}</h1>
            <h2>Role: {searchParams.role}</h2>
            <h3>Status: {searchParams.status}</h3>
        </>
    );
}
```

# Nested Dynamic Route :








## Grouping :
(FolderName)
    - custom header, footer 
