const express = require("express")
const ogrenciNoGonder = require("./utils/test_test")

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
    res.send("")
})

app.get("/test_json",(req,res)=>{
    res.send("Anasayfa")
})

app.get("/test_geocode",(req,res)=>{
    res.send("Anasayfa")
})

app.get("/test_weather",(req,res)=>{
    res.send("Anasayfa")
})

app.listen(port,() =>{
    console.log("Server "+port+". portta çalışıyor.");
})