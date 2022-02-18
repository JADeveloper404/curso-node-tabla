const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.log(argv);

// const [,,arg3 = 'base=5',arg4 = 'limite=10'] = process.argv;
// const [, base] = arg3.split("=");
// const [, limite] = arg4.split("=");

// console.log(base, limite);

crearArchivo(argv.b, argv.c, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch(err => console.log(err));