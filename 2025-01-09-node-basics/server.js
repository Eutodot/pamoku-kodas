const http = require('http')
const si = require('systeminformation')

const getCpuData = async () => {
    const cpu = await si.cpu()
    const { brand } = cpu
    const output = `<span>CPU brand: ${brand}</span>`

    return output
}

const server = http.createServer(async (req, res) => {
    // console.log("url", req.url)
    // console.log("body", req.body)
    // console.log("headers", req.headers)
    
    if (req.url === '/'){
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>My page</title></head>")
        res.write("<body>")
        res.write(`
            <form action="pc-type" method="POST">
                <select name="type">
                    <option value="gpu">GPU</option>
                    <option value="cpu">CPU</option>
                </select>

                <button type="submit">Get</button>
            </form>
        `)
        res.write("</body>")
        res.write("</html>")

        res.end()

        return
    }

    if (req.url === '/pc-type' && req.method === "POST"){
        const body = [] 
        req.on("data", (chunk) => {
            body.push(chunk)
        })
        req.on("end", () => {
            const parseBody = Buffer.concat(body).toString()
            const type = parseBody.split("=")[1]
            console.log(type)
            res.statusCode = 302
            res.setHeader("Location", "/" + type)
            res.end()
        })
        // res.setHeader("Content-Type", "text/html")
        // res.write("<html>")
        // res.write("<head><title>My page</title></head>")
        // res.write("<body><h1>sdgb</h1></body>")
        // res.write("</html>")

        // res.end()

        return
    }
    if (req.url === '/hi'){
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>My page</title></head>")
        res.write("<body><h1>Hi :3</h1></body>")
        res.write("</html>")

        res.end()

        return
    }

    if (req.url === '/cpu'){
        
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<head><title>My page</title></head>")
        res.write("<body>")
        res.write(await getCpuData())
        res.write("</body>")
        res.write("</html>")

        res.end()

        // si.graphics().then(data => {
        //     utilizationGpu = data.controllers[0]
        //     res.write(`<span>${utilizationGpu.model}</span>`)
        // })
        // res.write(`<span>${utilizationGpu.model}</span>`)   
        
        

        

        return
    }
    
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>My page</title></head>")
    res.write("<body><h1>404 page not found</h1></body>")
    res.write("</html>")

    res.end()
})

server.listen(3000)