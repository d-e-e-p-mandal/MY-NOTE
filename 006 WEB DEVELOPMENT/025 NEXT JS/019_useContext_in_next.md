USE Context :

✅ Step 1: Create Theme Context
📄 app/context/ThemeContext.js
```js
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

✅ Step 2: Wrap App with Provider
📄 app/layout.js
import { ThemeProvider } from "./context/ThemeContext";
```js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

✅ Step 3: Use Theme in Any Component
📄 app/components/ThemeToggle.js
```js
"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
```

✅ Step 4: Use Toggle Button

📄 app/page.js
```js
import ThemeToggle from "./components/ThemeToggle";

export default function Page() {
  return (
    <>
      <h1>Dark Mode Example</h1>
      <ThemeToggle />
    </>
  );
}
```

✅ Step 5: Add CSS
📄 app/globals.css
```css
html.light {
  background: white;
  color: black;
}

html.dark {
  background: black;
  color: white;
}
```