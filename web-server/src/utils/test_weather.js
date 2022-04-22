

const getAdress = (latitude,longtitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=mWsGyX15sv1E9qAw7WnucS4wW37u6HpS&query=' + latitude + ',' + longtitude + '&units=m'

    request = ({url = url, json : true},(error,res) =>{
        if(error){
            callback("Adres alinamadi",undefined)
        }else{
            return(undefined,res.body)
        }
    })
}