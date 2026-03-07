const https = require('https');

module.exports = async (req, res) => {
  // Add CORS headers so the frontend can read the response
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Use a precise User-Agent for NWS API requirements
  const options = {
    headers: { 'User-Agent': 'PutteetHillHOAApp/1.0' }
  };

  const httpsGet = (url) => {
    return new Promise((resolve, reject) => {
      https.get(url, options, (resp) => {
        let data = '';
        resp.on('data', (chunk) => { data += chunk; });
        resp.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }).on("error", (err) => {
        reject(err);
      });
    });
  };

  try {
    // 1. Get gridpoint from coordinates for Cresson, TX
    const pointsUrl = 'https://api.weather.gov/points/32.5332,-97.6167';
    const pointsData = await httpsGet(pointsUrl);

    if (!pointsData.properties || !pointsData.properties.forecast) {
      return res.status(500).json({ error: 'Could not get forecast URL from NWS' });
    }

    // 2. Fetch the actual forecast
    const forecastUrl = pointsData.properties.forecast;
    const forecastData = await httpsGet(forecastUrl);

    if (forecastData.properties && forecastData.properties.periods && forecastData.properties.periods.length > 0) {
      const currentForecast = forecastData.properties.periods[0];
      res.json(currentForecast);
    } else {
      res.status(500).json({ error: 'No forecast data available' });
    }
  } catch (error) {
    console.error('Error fetching from NWS API:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
