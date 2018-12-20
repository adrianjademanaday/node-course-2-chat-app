
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

    // socket.emit from Admin text Welcome to the chat app
        socket.emit('newMessage', {
            from: 'Admin',
            text: 'Welcome to the chat app',
            createAt: new Date().getTime()
        });

    // socket.broadcast.emit from Admin text New user joined
        socket.broadcast.emit('newMessage', {
            from: 'Admin',
            text: 'New user joined',
            createAt: new Date().getTime()
        });

    // create a createMessage event
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createAt: new Date().getTime()
        // });
    });
    
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});


// We configure our listening port 
server.listen(port, function () {
    console.log(`${APP_NAME} Listening on port ${port}`);
});

