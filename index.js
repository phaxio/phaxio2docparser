var express = require('express')
var app = express()

app.post('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, function () {
  console.log('Phaxio app listening on port 3000!')
})
