const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.end(`Hello Node Server 2001`)
})

server.listen(3000, () => {
  console.log('server is listening on http://localhost:3000');
})
