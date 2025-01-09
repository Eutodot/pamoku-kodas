const casual = require('casual')
const colors = require('colors')
const si = require('systeminformation')
const os = require('os')
const fs = require('fs')

const name = 'John'

console.log("This is " + name)
console.log(casual.name.red.italic)

// si.cpu().then(data => console.log(data))
// si.graphics().then(data => {
//     const utilizationGpu = data
//     console.log(utilizationGpu)
// })

console.log(fs)