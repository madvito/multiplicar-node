//requires
const fs = require('fs'); //la libreria ya existe en node
//const fs = require('express'); libreria descargada
//const fs = require('./lib');  libreria que se encuentra localmente
//Libreria FileSystem sirve para trabajar con archivos en almacenamiento  crear/borrar
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('================'.green);
    console.log(`===Tabla del ${base}===`.green);
    console.log('================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`
                ${base} X ${ i } = ${ base * i }`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base ingresada no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('El limite ingresado no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n `;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`.green)
            }
        });
    });
}

module.exports = { //permite exportar los modulos que contenga, a otros archivos con require
    crearArchivo,
    listarTabla
}