const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

//View setup
app.set('view engine', 'hbs');
//Manual set where views are (where it renders from)
app.set('views', path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

//View Helpers
hbs.registerHelper("log", word => console.log(word))
hbs.registerHelper("cap", word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
})
// hbs.registerHelper("isDog",() => true)


//Mount public folder (app.user(...) --> how you mount middleware)
//Middleware is execuign callback before routes get his, acces to samerequest
//and response object --> can do things priot, modify them

// app.use("/", (req, res, next) => {
//   console.log("This is out middleware.");
//   next();
        //If you want it to go the "next" one, type "next"
        //Allowing to go the route (end the cycle)
// })

//Makes public folder accessible
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect('/animals');
})

app.get("/animals", (req, res) => {
  let a = "crocodile";
  if(req.query.animal) {
    a = req.query.animal;
  }
  // Layers in between http communication
  // Set a request with http --> want html or JSON back
  // Then express chops it all up, parses it into object, converts it back to
  // a regular html response
  // Body is always a string
  res.render('./index.hbs', {
    // req.query.(name of query string)
    animal: a
    //array of objects
    // foods: [
    //   {
    //     name: "pasta",
    //     country: "italy"
    //   },
    //   {
    //     name: "sushi",
    //     country: "japan"
    //   }
    // ],
    // animals: [
    //   "dog",
    //   "cat",
    //   "frog"
    // ],
    // person: {
    //   name: "zage",
    //   school: "paly"
    // }
  })
    //Root is coming from views
})

app.listen(3000, () => {
  console.log("Serving up on port 3000");
})
