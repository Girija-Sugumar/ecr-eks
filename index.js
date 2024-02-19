const express = require('express')
const app = express()
const port = 4050

app.get('/', (req, res) => {
  res.send('pipeline testing')
})
app.get('/ecr', (req, res) => {
    res.send('new Image uploaded')
})
app.get('/eks', (req, res) => {
    res.send('new changes deployed in Website')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})