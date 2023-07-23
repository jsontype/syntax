// ES6(EcmaScript6 : JS의 원래 이름) 모듈
// import { express } from 'express';

// CommonJS 모듈
const express = require("express")
const app = express()

app.get("/", (req, res) =>
  res.send(`
  API 도큐멘트<br />
    1. GET : http://localhost:8080/users/hihihi, byebye, gogo 등 넣어서 사용호출<br />
    2. POST : 제작 예정<br />
  `)
)

// API 연결
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(8080, () => console.log(`현재 8080포트로 리스닝하고 있습니다.`))
