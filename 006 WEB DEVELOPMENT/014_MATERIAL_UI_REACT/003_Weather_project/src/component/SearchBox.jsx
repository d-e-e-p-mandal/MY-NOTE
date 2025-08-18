import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function SearchBox({ setWeather }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "668fe899482a4be3dd734bc38233f415";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }

    try {
      const res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      const data = await res.json();
      console.log("Full Weather JSON:", data); // ✅ console log
      setWeather(data); // pass up to parent
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
    setCity("");
  };

  return (
    <Box sx={{ width: 300, margin: "20px auto" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}