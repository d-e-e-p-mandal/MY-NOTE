# Meta Data In Next Js
title tag in layout : (Not recomended)

``` jsx
export const metadata = {
  title: "My Website",
  description: "This is my Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```


# ADVANCED STYLE :

layout.js
```jsx
export const metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "This is my Next.js app",
};
```

page.js
```js
export const metadata = {
  title: "Home",
};

export default function Page() {
  return <h1>Home Page</h1>;
}
```
🔁 Replacement : %s → "Home"
✅ Browser title : Home | My Website


# Dynamic Page : Generate meta data
```jsx
export async function generateMetadata() {
  return {
    title: "About Us",
    description: "Learn more about our company",
  };
}

export default function About() {
  return <h1>About Page</h1>;
}
```

##### Another :
```
app/[...slug]/page.js
```
```jsx
export async function generateMetadata({ params }) {
  const path = params.slug.join(" / ");

  return {
    title: path,
    description: `This page is for ${path}`,
  };
}

export default function Page({ params }) {
  return (
    <>
      <h1>Path:</h1>
      <p>{params.slug.join(" / ")}</p>
    </>
  );
}
```


## Override : using absolute
```jsx
export const metadata = {
  title: {
    absolute: "About Us Page",
  },
};
```