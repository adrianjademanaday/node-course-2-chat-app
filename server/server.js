
const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var APP_NAME = 'NODE-CHAT-APP';

var app = express();

app.use(express.static(publicPath));

app.listen(port, function () {
    console.log(`${APP_NAME} Listening on port ${port}`);
});

