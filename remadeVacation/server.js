const express = require('express');
const hbs = require('hbs');
const path = require('path');
const axios = require('axios');
const img = require('./images.js')
const geocode = require('./geocode/geocode.js');

const app = express();
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));

hbs.registerPartials(path.join(__dirname, "views", "partials"));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.redirect('/cities?name=Hawaii');
})

app.get('/cities', (req, res) => {
  //String
  c = req.query.name;

  geocode.getGeoCodeURL(c)
  .then((response) => {
    if(response.data.status === "ZERO_RESULTS") {
      // throw new Error("Unable to find that address.")
    } else {
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      return geocode.getWeatherURL(lat, lng);
    }
  })
  .then((response) => {
    const temp = response.data.currently.temperature;
    const directIcon = response.data.currently.icon;
    res.render('index.hbs', {
      title: c,
      currentTemp: geocode.print(temp, directIcon),
      images: img.images[c]
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
