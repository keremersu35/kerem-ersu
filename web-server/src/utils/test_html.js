
const getOgrenciAdSoyad = (callback) =>{
    const OgrenciAdSoyad = "<p>Kerem Ersu</p>";

    if(error){
        callback("Ogrenci adi soyadi alinamadi",undefined)
    }else{
        return(undefined,OgrenciAdSoyad)
    }
    return OgrenciAdSoyad;
}

module.exports = {
    getOgrenciAdSoyad
}