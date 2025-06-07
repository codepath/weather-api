const express = require('express')
const data = require('./data.js')
const app = express()
const PORT = process.env.PORT || 9009
app.get('/api', (req, res) => {
    res.json(data)
})
app.use('*', (req, res) => {
    res.send("Welcome to the Weather Data API")
})
app.listen(PORT, () => {
    console.log(`Weather API running on ${PORT}`)
})
