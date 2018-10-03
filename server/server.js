const express = require('express');
const fs = require('fs');

const app = express();


app.get('/tetris.js', (req, res) => {
    fs.readFile('./tetris.js', (err, data) => {
        res.write(data);
        res.end();
    })
})

const server = app.listen(9000, () => {
    console.log('Server is running at port 9000')
})