import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

export default function ShowWeather({ weather }) {
  if (!weather) return null;

  if (weather.cod !== 200) {
    return (
      <Typography 
        variant="h6" 
        color="error" 
        sx={{ mt: 3, textAlign: "center" }}
      >
        {weather.message}
      </Typography>
    );
  }

  // Weather icon link
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  // Convert sunrise/sunset (from UNIX timestamp to local time)
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <Card 
      sx={{ 
        maxWidth: 420, 
        margin: "20px auto", 
        borderRadius: 3, 
        boxShadow: 6,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        
        {/* City + Country */}
        <Typography variant="h5" gutterBottom fontWeight="bold">
          {weather.name}, {weather.sys?.country}
        </Typography>

        {/* Weather Icon */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          <img src={iconUrl} alt={weather.weather[0].description} />
        </Box>

        {/* Temperature */}
        <Typography variant="h4" fontWeight="bold">
          🌡 {Math.round(weather.main.temp - 273.15)}°C
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Feels like: {Math.round(weather.main.feels_like - 273.15)}°C
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ mt: 1 }}>
          {weather.weather[0].main} ({weather.weather[0].description})
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Extra details */}
        <Typography variant="body2">Min: {Math.round(weather.main.temp_min - 273.15)}°C | Max: {Math.round(weather.main.temp_max - 273.15)}°C</Typography>
        <Typography variant="body2">💧 Humidity: {weather.main.humidity}%</Typography>
        <Typography variant="body2">📈 Pressure: {weather.main.pressure} hPa</Typography>
        <Typography variant="body2">🌬 Wind: {weather.wind.speed} m/s</Typography>
        <Typography variant="body2">🌅 Sunrise: {sunrise}</Typography>
        <Typography variant="body2">🌇 Sunset: {sunset}</Typography>
      </CardContent>
    </Card>
  );
}