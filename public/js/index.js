var socket = io();

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'Alon',
        text: 'Hey, This is Alon'
    });
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});


