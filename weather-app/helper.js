//get geocodeURL
const getGeoCodeURL = (argv) => {
  const encodedAddress = encodeURIComponent(argv.address);
  const key = "AIzaSyC0U1MAPY2zFGm3nwyp32RzGGvmwrWOOjU";
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;
}

//get weatherURL
const getWeatherURL = (lat, lng) => {
  return `https://api.darksky.net/forecast/15bd1fe3de85835f0dcf3db2e7f94604/${lat}, ${lng}`;
}

//print data
const print = (tz, t, at, ds, pp, ws, cc, das, di) => {
  console.log(`Timezone: ${tz}`);
  console.log(`The temperature is ${t} degrees, but it feels like ${at}.`);
  console.log(`Direct Summary: ${ds} with a precipitation probability of ${pp} percent. Additionally, there is a wind speed of ${ws} and a cloud coverage of ${cc}.`);
  console.log(`Daily Summary: ${das}`);
  console.log(`Emoji: ${di}`, getIcon(di));
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
    return "No emoji available.";
  }
}

module.exports = {
  getGeoCodeURL,
  getWeatherURL,
  print,
  getIcon
}
