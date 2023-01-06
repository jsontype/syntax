require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()

const { PORT, MONGO_URI } = process.env

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// CONNECT TO MONGODB SERVER
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
