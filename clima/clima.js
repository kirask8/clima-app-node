const axios = require('axios');
const openWeatherAPI_KEY = 'ed931342cfa3b5b235ed842c9c3dea6e';
const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${openWeatherAPI_KEY}`);
    let temperatura = resp.data.main.temp;
    return temperatura;
}

module.exports = {
    getClima
}