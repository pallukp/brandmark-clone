import React, { useState, useEffect } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState({});
  const apiKey = 'your-api-key';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div className="weather-widget">
      {weather.main ? (
        <div>
          <h3>Weather in Bengaluru</h3>
          <p>{weather.main.temp}°C, {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
