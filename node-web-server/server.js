const express = require('express');
const hbs = require('hbs');
//Module developers use to deal with paths
const path = require('path');

//return value
const app = express();
app.set('view engine', 'hbs');

//Use partials folder -- as partials
  //Any file put in partials can be rendered
  //Handle bars thing
hbs.registerPartials(path.join(__dirname, "views", "partials"));
//vs. __dirname + "/views/partials"

//Can also register helpers (helper methods) with hbs
//Takes 2 parameters: name of function, define what you want the method to do
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('yell', (word) => {
  return word.toUpperCase() + "!!!";
})
r
//deals with get requests
//2 parameters: root path, callback method (takes a request + response)
app.get('/', (req, res) => {
  //send back template --> use different method
  //DYNAMIC
  //Like a return statement
  res.render('index.hbs', {
    school: "Paly",
    //Gets the date
    // year: new Date().getFullYear(),
    pageTitle: "Home"
  });
})

//how to redirect things
// app.get('/', (req, res) => {
//   res.redirect('/about')
// })
//

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    school: "Gunn",
    //Gets the date
    // year: new Date().getFullYear(),
    pageTitle: "About"
  })
})

//NO QUOTES AROUND REGEX!!!
app.get(/.*ing/, (req, res) => {
  res.send({
    year: new Date().getFullYear(),
    originalUrl: req.originalUrl,
    //Get parameters in link sent
    queryParams: req.query,
    school: req.query.school
  })
})

//To be able to run, it has to listen on a port
app.listen(3000, () => {
  //because you have not put this in a database
  console.log("Server is up on port 3000");
})
