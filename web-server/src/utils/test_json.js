const fs = require("fs")


const loadData=()=>{

    const jsonDosya =[{
        "ad" : "kerem",
        "soyad" : "ersu"
    }]

    //const dataBuffer = fs.readFileSync()
    const dataString = jsonDosya.toString()
    dataObject = JSON.parse(dataString)

    return dataObject
}

module.exports = {
    loadData
}

