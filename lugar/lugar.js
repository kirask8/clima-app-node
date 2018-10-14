const googleMapsAPI_KEY = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';
const axios = require('axios');

const gerLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${googleMapsAPI_KEY}`)
    if (resp.data.status == "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la dirección ${direccion}`);
    }
    let formatedAddress = resp.data.results[0].formatted_address;
    let lat = resp.data.results[0].geometry.location.lat;
    let lng = resp.data.results[0].geometry.location.lng;
    //console.log(`La dirección es: ${formatedAddress}\nLa latitud es: ${lat}\nLa longitud es: ${lng}`);
    return {
        direccion: formatedAddress,
        lat,
        lng
    }
}

module.exports = {
    gerLugarLatLng
}