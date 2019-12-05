let port = process.env.PORT; // On Heroku this will be the PORT app can listen to. On local this will evaluate to null and thus 8000 will be used
if (port == null || port == "") {
  port = 3000;
}

const express = require('express');
const app = express();

//Enable CORS for all resources
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('static'));

app.get('/get', function (req, res) {
  res.send('HTTP GET');
});

app.post('/post', function (req, res) {
  res.send('HTTP POST');
});

app.put('/put', function (req, res) {
  res.send('HTTP PUT');
});

app.delete('/delete', function (req, res) {
  res.send('HTTP DELETE');
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});