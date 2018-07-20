const axios = require('axios');

//get geocodeURL
const getGeoCodeURL = (address) => {
  const encodedAddress = encodeURIComponent(address);
  const key = "AIzaSyC0U1MAPY2zFGm3nwyp32RzGGvmwrWOOjU";
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`);
}

//get weatherURL
const getWeatherURL = (lat, lng) => {
  return axios.get(`https://api.darksky.net/forecast/15bd1fe3de85835f0dcf3db2e7f94604/${lat}, ${lng}`);
}

//print data
const print = (t, at, di) => {
  return `The temperature is ${t} degrees, but it feels like ${at}. ${getIcon(di)}`;
}

//Can return emojis
const getIcon = (icon) => {
  if (icon === "clear" || icon === "clear-day") {
    return "☀️";
  } else if (icon === "partly-cloudy-day") {
    return "🌤";
  } else if (icon === "partly-cloudy-night") {
    return "☁️";
  } else if (icon === "wind") {
    return "🌬"
  } else if (icon === "clear-night") {
    return "🌚";
  } else if (icon === "snow") {
    return "❄️";
  } else if (icon === "rain") {
    return "☔️";
  } else {
    return "(No emoji available)";
  }
}

module.exports = {
  getGeoCodeURL,
  getWeatherURL,
  print,
  getIcon
}
