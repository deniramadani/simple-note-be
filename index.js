require('dotenv').config()
const express = require('express')
const app = express()
const corsMiddleware = require('./src/middleware/cors.middleware')
const server = require('http').createServer(app);

const io = require('socket.io')(server);

require('./src/config/database') // koneksi ke database

// cors
app.use(corsMiddleware({
  origin: 'http://localhost:3000'
}))



app.use(express.json())

const notesRouter = require('./src/routes/notes.routes')
app.use('/', notesRouter)
app.listen( 5000, () => console.log('Server Started'))

io.on('connection', (socket) => {
  console.log('a user connected');  
  socket.emit('updateData', data);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});