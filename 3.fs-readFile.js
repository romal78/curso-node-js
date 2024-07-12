const fs = require('node:fs');
console.log('leyendo archivo uno');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primera lectura:',text);
});
console.log('--> hacer cosas ,ientras lee archivo..');
console.log('leyendo archivo dos');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segunda lectura',text);
});

