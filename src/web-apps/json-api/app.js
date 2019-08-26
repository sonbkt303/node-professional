const express = require('express');
const cors = require('cors'); // Use cors module for enable Cross-origin resource sharing
const app = express();
app.use(cors()); // for all routes

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
app.listen(port, function () {
  console.log('Node.js listening on port ' + port)
});