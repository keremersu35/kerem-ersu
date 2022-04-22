const request = require('request')

//https://api.mapbox.com/geocoding/v5/mapbox.places/' + encode URIComponent(adress) + '.json?access_token_pk.eyJ1ljoiaWZzNSIslmEiOiJjbDFveGZ2cjlxNjV3M2tvn1kaW45MjF3In0.jakzckr8Zkj8Xdbo8yQ05w

const geocode = (adress,callback) =>{
    const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + adress + '.json?access_token_pk.eyJ1ljoiaWZzNSIslmEiOiJjbDFveGZ2cjlxNjV3M2tvn1kaW45MjF3In0.jakzckr8Zkj8Xdbo8yQ05w&limit=1';

    request = ({url : URL, json : true},(error,res,body) =>{
        if(error){
            callback("Adres alinamadi",undefined)
        }else{
            callback(undefined,{
                enlem : body.features[0].center[1],
                boylam : body.features[0].center[0],
                konum : body.features[0].place_name
            })
        }
    })
}

module.exports = {
    geocode
}