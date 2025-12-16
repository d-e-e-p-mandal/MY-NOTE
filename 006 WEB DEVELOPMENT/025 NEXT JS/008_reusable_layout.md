```code
app/
  layout.js          ← Root layout (Header + Footer)

  (main)/
    page.js          ← Uses root layout

  (auth)/
    layout.js        ← Auth-only layout (NO header/footer)
    login/
      page.js
    register/
      page.js
```


```jsx
export default function AuthLayout({ children }) {
  return (
    <div style={{ padding: "40px" }}>
      {children}
    </div>
  );
}
```

Note : Dont use head or body tag : (Error will be generate)