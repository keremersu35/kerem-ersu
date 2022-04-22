const fs = require("fs")

const dataBuffer = fs.readFileSync("adSoyad.json")
const dataString = dataBuffer.toString()
dataObject = JSON.parse(dataString)

return dataObject