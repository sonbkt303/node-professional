const express = require('express');
const cors = require('cors'); // Use cors module for enable Cross-origin resource sharing
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // module for parsing cookies
app.use(cookieParser());
app.use(cors()); // for all routes
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 8080;
app.get('/', function (req, res) {
  const info = {
    'string_value': 'StackOverflow',
    'number_value': 8476
  }
  res.json(info);
  // or
  /* res.send(JSON.stringify({
  string_value: 'StackOverflow',
  number_value: 8476
  })) */
  //you can add a status code to the json response
  /* res.status(200).json(info) */
})

//GET /names/john
app.get('/names/:name', function (req, res, next) {
  if (req.params.name == 'john') {
    return res.send('Valid Name');
  } else {
    next(new Error('Not valid name')); //pass to error handler
  }
});

app.get('/setcookie', function (req, res) {

  
  // setting cookies
  res.cookie('abc', 'sonbkt', {
    maxAge: 900000,
    httpOnly: true
  });
  return res.send('Cookie has been set');
});


app.get('/getcookie', function (req, res) {
  var username = req.cookies['abc'];
  if (username) {
    return res.send(username);
  }
  return res.send('No cookie found');
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //pass error to the next matching route.
  next(err);
});


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

//error handler
app.use(function (err, req, res, next) {
  console.log(err.stack); // e.g., Not valid name
  return res.status(500).send('Internal Server Occurred');
});


app.use(function (req, res, next) {
  function afterResponse() {
    res.removeListener('finish', afterResponse);
    res.removeListener('close', afterResponse);
    // actions after response
  }
  res.on('finish', afterResponse);
  res.on('close', afterResponse);
  // action before request
  // eventually calling `next()`
  next();
});



app.listen(port, function () {
  console.log('Node.js listening on port ' + port)
});