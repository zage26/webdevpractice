const yargs = require('yargs')
const axios = require('axios')
const helper = require('./helper.js')

const argv = yargs
  .option({
    address: {
      demandOption: true,
      alias: "a",
      describe: "Address to fetch",
      //Everything you type becomes a string
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .argv

  axios.get(helper.getGeoCodeURL(argv))
    .then((response) => {
      if(response.data.status === "ZERO_RESULTS") {
        //Error takes a message
        throw new Error("Unable to find that address.")
      } else {
        const address = response.data.results[0].formatted_address;
        console.log("Address: ", address);
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        return axios.get(helper.getWeatherURL(lat, lng));
      }
    })
    .then((response) => {
      //gathering data
      const timezone = response.data.timezone;
      const temp = response.data.currently.temperature;
      const appTemp = response.data.currently.apparentTemperature;
      const precipProb = response.data.currently.precipProbability;
      const windSpeed = response.data.currently.windSpeed;
      const cloudCover = response.data.currently.cloudCover;
      const directSum = response.data.currently.summary;
      const dailySum = response.data.daily.summary;
      const directIcon = response.data.currently.icon;
      helper.print(timezone, temp, appTemp, directSum, precipProb, windSpeed, cloudCover, dailySum, directIcon);
    }).catch((e) => {
      if(e.code === "ENOTFOUND") {
        //We threw an error because that address does not exist
        console.log("This url does not exist. Unable to connect with google.");
      } else if(e.message) {
        //Could be an error that you threw that got caught
        console.log(e.message);
      }
    })
