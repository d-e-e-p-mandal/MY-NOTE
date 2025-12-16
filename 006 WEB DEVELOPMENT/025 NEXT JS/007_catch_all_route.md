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