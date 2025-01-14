// const http = require('http')

const express = require('express')

const app = express()

app.use("/hi", (req, res, next) => {
    console.log('labas!')

    res.send("<h1>hello</h1>")
})
// const server = http.createServer(app)

// server.listen(3000)

app.listen(3000)