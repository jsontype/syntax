// ES Module : EcmaScript
// import express from 'express';

// CJS Module : CommonJS
const express = require("express")
const app = express()
const port = 3000

// app.get("/", (_req, res) => {
//   res.send("Hello World!")
// })

// app.use("/", (_req, res) => {
//   res.sendFile(__dirname + "/index.html")
// })

// /* -> url path
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)

app.get("/", (_req, res) => {
  res.render("index.html")
})

app.get("/about", (_req, res) => {
  res.render("about.html")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
