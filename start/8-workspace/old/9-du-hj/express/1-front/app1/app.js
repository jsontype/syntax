const express = require('express')
const app = express()
const port = 3000

// Text만 띄워라.
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// HTML 화면을 띄워라.
app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => console.log(`listening on port ${port}`))
