const fs = require('fs')
const { join } = require("path");
let jsonData = JSON.parse(fs.readFileSync(join(__dirname, '../../nav.json'), 'utf-8'))
console.log(jsonData)

module.exports = jsonData
