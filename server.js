require('dotenv').config()
// Use for socket.io
const http = require('http')
const socketio = require('socket.io')

// Create an express variables
const express = require('express')
const { join } = require('path')
const app = express()

// Create a socket server http using app
const server = http.createServer(app)
const io = socketio(server)

// Telling app to use file in public folder ? 
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

// Start to listening
io.on('connection', socket => {
    socket.emit('onUpdate', "Welcome to NotFaceBook")

    //Broadcast when a user connect
    socket.broadcast.emit("onUpdate", 'A user has joined the chat')

    // Runs on when disconnect
    socket.on('disconnect', () =>
    {
        io.emit('onUpdate',JSON.stringify({name:'Tim',age:'M'}))
    })
})

// Create a PORT variable equal to whatever port that existed in the enviroment or 3000
const PORT = process.env.PORT || 3000

// Telling app to use route in folder routes
app.use(require('./routes'))

// Create connection (instead of using app.listen, we now can use server.listen and we still can get the same result)
require('./connection')
.sync()
.then(() => server.listen(PORT, () => console.log('http://localhost:3000')))
.catch(err => console.error(err))