var argv = require('yargs')
  .command('hola', 'Greets the user', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Tu nombre va aqui',
        type: 'string'
      },
      lastname: {
        demand: true,
        alias: 'l',
        description: 'Tu apellido va aqui',
        type: 'string'
      }
    }).help('help')
  })
  .command('get', 'some description', function (yargs) {

  })
  .help('help')
  .argv;
var command = argv._[0];

console.log(argv);

if (command === 'hola' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
  console.log('Hola ', argv.name, ' ', argv.lastname, '!');
}else if (command === 'hola' && typeof argv.name !== 'undefined') {
  console.log('Hola ', argv.name, '!');
} else if (command === 'hola') {
  console.log('Hola mundo');
}

// $ node example-args.js hola --name Oscar --lastname Gat
