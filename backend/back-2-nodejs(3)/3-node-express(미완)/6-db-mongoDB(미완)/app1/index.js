// index.js
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(5000, function () {
  console.log("Server listening on port 5000");
});
