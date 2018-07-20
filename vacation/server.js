const express = require('express');
const hbs = require('hbs');
const path = require('path');
const axios = require('axios');
const geocode = require('./geocode/geocode.js');

const app = express();
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));

hbs.registerPartials(path.join(__dirname, "views", "partials"));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.redirect('/hawaii');
})

// Hawaii
app.get('/hawaii', (req, res) => {
  geocode.getGeoCodeURL("Hawaii")
  .then((response) => {
    if(response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address.")
    } else {
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      return geocode.getWeatherURL(lat, lng);
    }
  })
  .then((response) => {
    const temp = response.data.currently.temperature;
    const appTemp = response.data.currently.apparentTemperature;
    const directIcon = response.data.currently.icon;
    res.render('index.hbs', {
      title: 'Hawaii',
      photo1: "hawaiiEat.png",
      photo2: "hawaiiExplore.png",
      photo3: "hawaiiRelax.png",
      currentTemp: geocode.print(temp, appTemp, directIcon)
    })
  })
  .catch((e) => {
    if(e.code === "ENOTFOUND") {
      console.log("This url does not exist. Unable to connect with google.");
    } else if(e.message) {
      console.log(e.message);
    }
  })
})

// Venice
app.get('/venice', (req, res) => {
  geocode.getGeoCodeURL("Venice")
  .then((response) => {
    if(response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address.")
    } else {
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      return geocode.getWeatherURL(lat, lng);
    }
  })
  .then((response) => {
    const temp = response.data.currently.temperature;
    const appTemp = response.data.currently.apparentTemperature;
    const directIcon = response.data.currently.icon;
    res.render('index.hbs', {
      title: 'Venice',
      photo1: "veniceEat.png",
      photo2: "veniceExplore.png",
      photo3: "veniceRelax.png",
      currentTemp: geocode.print(temp, appTemp, directIcon)
    })
  })
  .catch((e) => {
    if(e.code === "ENOTFOUND") {
      console.log("This url does not exist. Unable to connect with google.");
    } else if(e.message) {
      console.log(e.message);
    }
  })
})

// Tokyo
app.get('/tokyo', (req, res) => {
  geocode.getGeoCodeURL("Tokyo")
  .then((response) => {
    if(response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address.")
    } else {
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      return geocode.getWeatherURL(lat, lng);
    }
  })
  .then((response) => {
    const temp = response.data.currently.temperature;
    const appTemp = response.data.currently.apparentTemperature;
    const directIcon = response.data.currently.icon;
    res.render('index.hbs', {
      title: 'Tokyo',
      photo1: "tokyoEat.png",
      photo2: "tokyoExplore.png",
      photo3: "tokyoRelax.png",
      currentTemp: geocode.print(temp, appTemp, directIcon)
    })
  })
  .catch((e) => {
    if(e.code === "ENOTFOUND") {
      console.log("This url does not exist. Unable to connect with google.");
    } else if(e.message) {
      console.log(e.message);
    }
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
})
