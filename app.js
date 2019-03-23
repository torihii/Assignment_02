const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server); 

const LISTEN_PORT = 8080; 

app.use((express.static(__dirname + '/public'))); 

//routes
app.get('/color', function(req,res) {
    res.sendFile(__dirname + '/public/color.html');
});

app.get('/controller', function(req,res) {
    res.sendFile(__dirname + '/public/controller.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    //socket = one client
    //socketIO.sockets = all clients
    socket.on('red', function(data) {
        console.log('red event heard');
        socketIO.sockets.emit('color_change', {r:255, g:0, b:0});
    });

    socket.on('green', function(data) {
        console.log('green event heard');
        socketIO.sockets.emit('color_change', {r:0, g:255, b:0});
    });

    socket.on('blue', function(data) {
        console.log('blue event heard');
        socketIO.sockets.emit('color_change', {r:0, g:0, b:255});
    });

    //controller for the second event in which player two affects player one
    socket.on('nred', function(data) {
        console.log('red2 event heard');
        socketIO.sockets.emit('color_change_two', {r:255, g:0, b:0});
    });

    socket.on('ngreen', function(data) {
        console.log('green2 event heard');
        socketIO.sockets.emit('color_change_two', {r:0, g:255, b:0});
    });

    socket.on('nblue', function(data) {
        console.log('blue2 event heard');
        socketIO.sockets.emit('color_change_two', {r:0, g:0, b:255});
    });






});




//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);