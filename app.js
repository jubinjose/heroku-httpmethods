let port = process.env.PORT; // On Heroku this will be the PORT app can listen to. On local this will evaluate to null and thus 8000 will be used
if (port == null || port == "") {
  port = 3000;
}
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Http Get');
});
app.listen(port, function () {
  console.log('Listening on port ' + port);
});