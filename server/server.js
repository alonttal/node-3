const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.render('index');
// })

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Alon',
        text: 'some random text',
        createdAt: 123
    });
    
    socket.on('createMessage', (message) => {
        console.log(message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
})