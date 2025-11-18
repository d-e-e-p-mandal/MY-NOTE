[Set Up Link](https://tailwindcss.com/docs/installation/using-vite)

----

# Vite React Set-up :
Tailwind v4 works with ZERO CONFIG by default : (Latest)
### Run command :
```bash
npm run dev
```

```bash
npm create vite@latest my-project
cd my-project
```

```bash
npm install tailwindcss @tailwindcss/vite
```

**change `src/index.css` file**
```css
@import "tailwindcss";
```

**Update `vite.config.js`**
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

```
Or :
```js
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

#### NEXT SET UP FOR TYPE SCRIPT 

```bash
npm install -D @types/node
```

**tailwind.config.ts (not .js)**
```bash
touch tailwind.config.ts
```
```ts
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
}
```
If you want me to check your exact project setup, just send your folder tree:
```bash
tree -L 2
```
----

# PostCSS For HTML Simple page :
Run Command :
```bash
npm run build
```
```
Project Name/
 ├── index.html
 ├── index.css
 ├── postcss.config.js
 └── package.json
```

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

```css
@import "tailwindcss";
```
```bash
npm install
```
//tailwind.config.js
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

```json
// package.json
{
  "type": "module",
  "scripts": {
    "build": "postcss index.css -o output.css --watch"
  },
  "devDependencies": {
    "postcss": "^8.4.0",
    "postcss-cli": "^9.1.0",
    "tailwindcss": "^4.0.0"
  }
}
```
Link css file output.css :(based on build command on package json file ,scripts command)


### PostCSS For React :
Run Command : (Don't need build set up)
```
npm run dev
```
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

//postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
---