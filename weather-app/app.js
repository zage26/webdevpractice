const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')
const request = require('request')

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

  //Call function, takes and address and a function
  geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    //undefined = false
    if(errorMessage) {
      console.log(errorMessage);
    } else {
      console.log("Address: " + results.address);
      weather.getTemp(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        console.log(`The temperature is ${weatherResults.temp} degrees, but it feels like ${weatherResults.appTemp}.`);
        console.log(`Direct Summary: ${weatherResults.summary} with a precipitation probability of ${weatherResults.precipProb} percent.`);
        console.log(`Weekly Summary: ${weatherResults.overallSummary}`);
        console.log(`Emoji: ${weather.getIcon(weatherResults.icon)}`);
      })
    }
  });
