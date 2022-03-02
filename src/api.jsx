import axios from "axios";

export async function WeatherSearch(value) {
  const options = {
    method: "GET",
    url: `https://api.weatherapi.com/v1/forecast.json?key=db8ac7f862b8449d8e9185941211405&q=${value}&days=10&aqi=yes&alerts=yes`,
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  try {
    const response = await axios(options.url, {
      headers: {},
    });
    return response;
  } catch (error) {
    return error;
  }
}

// TODO: Implement Weather MAP using https://openweathermap.org/api/weathermaps
