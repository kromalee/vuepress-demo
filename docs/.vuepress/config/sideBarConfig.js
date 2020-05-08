//侧边栏配置
const fs = require('fs')
const { join } = require("path");
let jsonData = JSON.parse(fs.readFileSync(join(__dirname, '../../sidebar.json'), 'utf-8'))
console.log(jsonData)
module.exports = {
  sidebar: jsonData
}