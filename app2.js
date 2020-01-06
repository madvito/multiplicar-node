// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un txt de la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;
const argv = require('./config/yargs').argv; //importar el codigo de arriba desde el otro archivo que creamos
const colors = require('colors');



//const multiplicar = require('./multiplicar/multiplicar')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//let base = "f";


//console.log(process.argv); muestra la direccion de node y la direccion de la app, si manda un parametro por cmd:"nodemon app --base=4",
//se muestra como 3 valor de un array despues de las direcciones de node y de la app
//let argv2 = process.argv;

console.log(argv.base);
console.log('Limite ' + argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(base);