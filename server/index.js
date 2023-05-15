const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
    cors: {
        origin: 'http://127.0.0.1:3000',
    },
})
const PORT = process.env.PORT || 5000

io.on('connection', (ws) => {
    const session = ws.handshake.query.id
    ws.join(session)
    console.log(`New user connected ${ws.id}`)
    ws.send('Connection is successes')

    ws.on('hello', (name) => {
        ws.broadcast.to(session).emit('hello', name)
    })

    ws.on('draw', (data) => {
        console.log(`Drawing...${ws.id}`)
        ws.broadcast.to(session).emit('draw', data)
    })

    ws.on('disconnect', () => {
        console.log(`Client disconnected ${ws.id}`)
    })
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
