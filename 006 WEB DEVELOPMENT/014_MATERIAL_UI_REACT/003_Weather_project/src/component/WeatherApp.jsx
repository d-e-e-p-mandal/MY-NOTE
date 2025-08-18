import { useState } from "react";
import SearchBox from "./SearchBox";
import ShowWeather from "./ShowWeather";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>🌤️ Weather App</h1>
      {/* pass setter to child */}
      <SearchBox setWeather={setWeather} />
      <ShowWeather weather={weather} />
    </div>
  );
}