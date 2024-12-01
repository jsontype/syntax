const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/plus', function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const result = Number(a) + Number(b);
    res.send(String(result))
});

app.listen(3000, function () {
    console.log('Server Listening on port 3000!');
});
