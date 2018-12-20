
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'aliebabah@example.com',
        text: 'Hey, Take Care Node.js'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected to server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});