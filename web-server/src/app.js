const express = require("express")
const ogrenciNoGonder = require("./utils/test_test")
const ogrenciAdSoyad = require("./utils/test_html")
const geocode = require("./utils/test_geocode")
const JsonData = require("./utils/test_json")
const weather = require("./utils/test_geocode")

const app = express()

const port = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Anasayfa")
})

app.get("/test_test",(req,res)=>{
    const ogrenciNo = ogrenciNoGonder.getOgrenciNo();
    res.send(ogrenciNo);
})

app.get("/test_html",(req,res)=>{
    const OgrenciAdSoyad = ogrenciAdSoyad.getOgrenciAdSoyad();
    res.send(OgrenciAdSoyad)
})

app.get("/test_json",(req,res)=>{
    const jsonDosya = JsonData.loadData()
    res.send()
})

app.get("/test_geocode",(req,res)=>{
    const sehir = req.query.city
    geocode.geocode(sehir,(error,{enlem, boylam}) =>{
        if(error){
            res.send("Hata")
        }else{
            weather.getWeather(enlem,boylam,(error,data)=>{
                if(error){
                    res.send("Hata")
                }else{
                    res.send("Onay")
                }
            })
        }
    })
})

app.get("/test_weather",(req,res)=>{
    res.send("Anasayfa")
})

app.listen(port,() =>{
    console.log("Server "+port+". portta çalışıyor.");
})