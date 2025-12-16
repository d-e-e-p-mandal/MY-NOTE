
### Before V4 Engine :
app/globals.css
```css
:root {
  --primary: 220 90% 56%;
  --secondary: 160 84% 39%;
}
```

tailwind.config.js
```js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
      },
    },
  },
};
```


Only Variable :
tailwind.config.js
```js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
    },
  },
};
```


# V4 engine :
app/globals.css
```js
@theme {
  /* initial (default) value */
  --color-primary: hsl(220 90% 56%);
}

/* override value */
.dark {
  --color-primary: hsl(0 0% 100%);
}
```

Only Variable :
app/globals.css
```js
@theme {
  --color-*: initial;

  --color-primary: hsl(220 90% 56%);
}

/* override value */
.dark {
  --color-primary: hsl(0 0% 100%);
}
```