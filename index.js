const express = require('express')
const app = express()
const port = 4050

app.get('/', (req, res) => {
  res.send('shinchan')
})
app.get('/ecr', (req, res) => {
    res.send('doremon')
})
app.get('/eks', (req, res) => {
    res.send('jackiechan')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})