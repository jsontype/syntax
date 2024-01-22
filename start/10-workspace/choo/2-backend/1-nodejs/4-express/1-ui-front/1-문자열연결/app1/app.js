// ES6(EcmaScript6 : JS의 원래 이름) 모듈
// import { express } from 'express';

// CommonJS 모듈
const express = require("express")
const app = express()

app.get("/", (req, res) => res.send("Hello World!"))

app.listen(3000, () => console.log(`현재 3000포트로 리스닝하고 있습니다.`))
