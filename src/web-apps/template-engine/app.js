const express = require('express'); //Imports the express module
const app = express(); //Creates an instance of the express module
const PORT = 3000; //Randomly chosen port
app.set('view engine', 'jade'); //Sets jade as the View Engine / Template Engine
app.set('views', '../../src/resources/views/template/'); //Sets the directory where all the views (.jade files) are stored.
//Creates a Root Route
app.get('/', function (req, res) {
  res.render('index'); //renders the index.jade file into html and returns as a response. The function optionally takes the data to pass to the view.
});
//Starts the Express server with a callback
app.listen(PORT, function (err) {
  if (!err) {
    console.log('Server is running at port', PORT);
  } else {
    console.log(JSON.stringify(err));
  }
});

