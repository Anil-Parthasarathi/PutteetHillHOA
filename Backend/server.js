const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Cresson, TX coordinates
const LAT = 32.5326;
const LON = -97.6164;

app.get('/api/weather', async (req, res) => {
  try {
    // 1. Get the gridpoint for the coordinates
    const pointsRes = await axios.get(`https://api.weather.gov/points/${LAT},${LON}`, {
      headers: { 'User-Agent': 'PutteetHillHOA-Website' }
    });
    
    const forecastUrl = pointsRes.data.properties.forecast;

    // 2. Get the forecast from the gridpoint
    const forecastRes = await axios.get(forecastUrl, {
      headers: { 'User-Agent': 'PutteetHillHOA-Website' }
    });

    const currentForecast = forecastRes.data.properties.periods[0];

    res.json({
      temperature: currentForecast.temperature,
      temperatureUnit: currentForecast.temperatureUnit,
      shortForecast: currentForecast.shortForecast,
      icon: currentForecast.icon,
      isDaytime: currentForecast.isDaytime
    });
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
