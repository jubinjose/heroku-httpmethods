const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

router
    .get('/get', (req, res) => {
        createResponse(req, res);
    })
    .post('/post', (req, res) => {
        createResponse(req, res);
    })
    .put('/put', (req, res) => {
        createResponse(req, res);
    })
    .delete('/delete', (req, res) => {
        createResponse(req, res);
    });

function createResponse(req, res){
    var resp = '{"HEADERS":' + JSON.stringify(req.headers) + ',"BODY":"' + req.body + '"}';
    console.log(resp);
    res.send(resp);
}

module.exports = router;