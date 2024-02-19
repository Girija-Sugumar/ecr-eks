const express = require('express')
const app = express()
const port = 4050

app.get('/', (req, res) => {
  res.send('Testing works')
})
app.get('/ecr', (req, res) => {
    res.send('Image uploaded')
})
app.get('/eks', (req, res) => {
    res.send('Website deployed')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})