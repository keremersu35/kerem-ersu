const request = require('request')

//https://api.mapbox.com/geocoding/v5/mapbox.places/' + encode URIComponent(adress) + '.json?access_token_pk.eyJ1ljoiaWZzNSIslmEiOiJjbDFveGZ2cjlxNjV3M2tvn1kaW45MjF3In0.jakzckr8Zkj8Xdbo8yQ05w

const getAdress = (adress,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token_pk.eyJ1ljoiaWZzNSIslmEiOiJjbDFveGZ2cjlxNjV3M2tvn1kaW45MjF3In0.jakzckr8Zkj8Xdbo8yQ05w'

    request = ({url = url, json : true},(error,res) =>{
        if(error){
            callback("Adres alinamadi",undefined)
        }else{
            return(undefined,res.body)
        }
    })
}

module.exports = {
    getAdress
}