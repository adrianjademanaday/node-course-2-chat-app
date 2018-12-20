
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var APP_NAME = 'NODE-CHAT-APP';

// We configure our express app
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// We configure our middleware
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});


// We configure our listening port 
server.listen(port, function () {
    console.log(`${APP_NAME} Listening on port ${port}`);
});

