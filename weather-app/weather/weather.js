const request = require('request')

const getTemp = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/15bd1fe3de85835f0dcf3db2e7f94604/${lat}, ${long}`,
    json: true
  }, (error, response, body) => {
    if(!error && body.code != 400) {
      callback(undefined, {
        temp: body.currently.temperature,
        appTemp: body.currently.apparentTemperature,
        summary: body.currently.summary,
        precipProb: body.currently.precipProbability,
        overallSummary: body.daily.summary,
        icon: body.currently.icon
      })
    } else {
        callback("This address doesn't exist", undefined)
    }
  })
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

module.exports = { getTemp, getIcon }
