/* node or npm modules */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

/* local modules */
const config = require('./config');

/* express object */
const app = express();

/* middleware */
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'));

// set the secret key variable for JWT
app.set('jwt-secret', config.secret)


app.get('/', (req, res) => {
    res.send("Hello JWT")
})


app.get('/tetris.js', (req, res) => {
    fs.readFile('./tetris.js', (err, data) => {
        res.write(data);
        res.end();
    })
})

const server = app.listen(9000, () => {
    console.log('Server is running at port 9000')
})