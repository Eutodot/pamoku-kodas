const express = require('express')
const bodyParser = require('body-parser')
const si = require('systeminformation')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

const getCpuData = async () => {
    const cpu = await si.cpu()
    const { brand } = cpu
    const output = `<h1>CPU brand: ${brand}</h1>`

    return output
}

const getGpuData = async () => {
    const gpu = await si.graphics()
    const { model } = gpu.controllers[0]
    console.log(model)
    const output = `<h1>GPU model: ${model}</h1>`

    return output
}

app.use("/pc", async (req, res, next) => {
    const output = await getCpuData() + await getGpuData()
    res.send(output)
})

app.use("/form", async (req, res, next) => {
    res.send(`
        <form action="form-message" method="POST">
            <input type="text" name="message"/>

            <button type="submit">Send</button>
        </form>
    `)
})

app.use("/form-message", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

app.use("/hi", (req, res, next) => {
    res.send("<h1>Hi :3</h1>")
})

app.use("/", (req, res, next) => {
    res.send("<h1>Hello World!</h1>")
})

app.listen(3000)