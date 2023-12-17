const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {
    res.send('I said biiiiiiiiiiiiiiiitch');
})

app.listen(3000, () => {
    console.log("Your server is running on port 3000")
})