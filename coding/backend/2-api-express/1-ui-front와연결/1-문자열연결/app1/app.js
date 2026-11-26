// ES 모듈
// import express from 'express'

// CommonJS 모듈
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Hello World!"))

app.listen(port, () => console.log(`listening on port ${port}!`))
