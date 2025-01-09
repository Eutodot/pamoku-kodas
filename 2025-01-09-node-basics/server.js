const http = require('http')

const server = http.createServer((req, res) => {
    console.log("url", req.url)
    // console.log("body", req.body)
    // console.log("headers", req.headers)

    if (req.url === '/hi'){
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>My page</title></head>")
        res.write("<body><h1>Hi :3</h1></body>")
        res.write("</html>")

        res.end()

        return
    }
    
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>My page</title></head>")
    res.write("<body><h1>Hello World!</h1></body>")
    res.write("</html>")

    res.end()
})

server.listen(3000)