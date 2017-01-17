var express = require('express')
var app = express()
var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Set the URL of this app to be your receive callback URL in Phaxio! ')
})

app.listen(port, function () {
  console.log('Phaxio app listening on port ' + port + '!')
})
