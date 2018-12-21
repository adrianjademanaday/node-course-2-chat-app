
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

});

socket.on('disconnect', function () {
    console.log('Disconnected to server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Adrian',
//     text: 'Hi, Node.js'
// }, function(data) {
//     console.log('Got it!.', data);
// });

// socket.emit('adminMessage', {
//     from: 'Admin',
//     text: 'Hello, Noders'
// }, function(msg) {
//     console.log('Message from Admin', msg);
// });

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {
        
    });
});