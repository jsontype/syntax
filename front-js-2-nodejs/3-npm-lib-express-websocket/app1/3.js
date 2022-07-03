// "웹서버 만드는 코드"
const express = require('express')
const app = express()

app.use("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8080)



// "웹소켓 만드는 코드"
const WebSocket = require('ws')

const socket = new WebSocket.Server({
    port: 8081
})

// 유저가 서버에게 메시지를 보내면 서버가 받음
socket.on('connection', (ws, req) => {
    ws.on('message', (msg) => {
        // 서버가 유저에게 데이터를 돌려줌
        console.log('유저가 보낸 거 : ' + msg)
        ws.send('저리가')
    })
})
