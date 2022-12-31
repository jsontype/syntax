// "웹서버 만드는 코드"
const express = require('express')
const app = express()

app.use("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8080)
