const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.gerLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temperatura}° C`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    }).catch(err => {
        console.log("Error: ", err);
    });

// lugar.gerLugarLatLng(argv.direccion).then(resp => {
//         clima.getClima(resp.lat, resp.lng)
//             .then(result => {
//                 console.log(`Temperatura actual en ${argv.direccion}: ${result}° C`);
//             }).catch(err => {
//                 console.log('Error: ', err);
//             });
//     })
//     .catch(err => {
//         console.log(err);
//     });