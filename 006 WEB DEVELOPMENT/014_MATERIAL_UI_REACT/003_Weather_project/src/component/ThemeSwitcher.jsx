import { useState } from "react";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function ThemeSwitcher() {
  const [light, setLight] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("light-theme", !light);
    setLight(!light);
  };

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
        bgcolor: light ? "yellow.200" : "grey.800",
        color: light ? "orange" : "white",
        "&:hover": {
          bgcolor: light ? "yellow.300" : "grey.700",
        },
        borderRadius: "12px",
        p: 1.5
      }}
    >
      {light ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}