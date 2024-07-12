const fs = require('node:fs/promises');
//const{promises} = require('node:util'); esto solo en los modulos nativos que no tienen promesas nativas
console.log('leyendo archivo uno');
fs.readFile('./archivo.txt', 'utf-8')
.then((text) => {
    console.log('primera lectura:',text);
});
console.log('--> hacer cosas ,ientras lee archivo..');
console.log('leyendo archivo dos');
fs.readFile('./archivo2.txt', 'utf-8')
.then((text) => {
    console.log('segunda lectura',text);
});

