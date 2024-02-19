const express = require('express')
const app = express()
const port = 4050

app.get('/', (req, res) => {
  res.send('test1')
})
app.get('/ecr', (req, res) => {
    res.send('test image')
})
app.get('/eks', (req, res) => {
    res.send('test deploy')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})