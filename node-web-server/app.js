//returns a function
const express = require('express');
const app = express();

//This code makes the folder "public" public 
//Takes a single function
//__dirname --> tells you the root directory of your project (global const, given to you by node)
app.use(express.static(__dirname + '/public'))

//takes a route, callback (expecting two arguments: request, response)
app.get('/', (req, res) => {
  //very simple method
  //dynamically tells what ur responding with
  res.send({
    //put in anything
    name: 'Zage',
    likes: [
      "programming",
      "tarot reading",
      "ultimate frisbee"
    ]
  });
})

app.get('/about', (req, res) => {
  res.send({
    name: 'Zach',
    likes: [
      'juggling',
      'architecture',
      'unicycling'
    ]
  });
})

app.get('/content', (req, res) => {
  //Can put straight up text --> interpret html
  res.send("<h1>This is some text</h1>");
})


//takes a port, callback
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
