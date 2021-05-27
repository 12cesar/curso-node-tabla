const argv = require('./config/yargs');
const { tabla } = require('./helpers/multiplicar');
const colors = require('colors');

//option('l')
//listar
//booelan
//default: false
//console.log(base);

//const base = 5;

tabla(argv.b, argv.l, argv.h)
    .then(result=>console.log(result.rainbow, 'Creado'))
    .catch(err=>console.log(err)) 
 