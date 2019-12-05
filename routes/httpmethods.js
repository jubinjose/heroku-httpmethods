const express = require('express');
const router = express.Router();

router
  .get('/get', function (req, res) {
    res.send(appendDate('HTTP GET'));
  })
  
  .post('/post', function (req, res) {
    res.send(appendDate('HTTP POST'));
  })
  
  .put('/put', function (req, res) {
    res.send(appendDate('HTTP PUT'));
  })
  
  .delete('/delete', function (req, res) {
    res.send(appendDate('HTTP DELETE'));
  });

function appendDate(strval){
    return strval + ' - ' + new Date().toLocaleString('en-US', { hour12: true })
}

module.exports = router;