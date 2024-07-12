//file system node module  
const fs = require('node:fs'); //a partir de Node 16, se recomiendan importar de forma nativa node: 
const stats=fs.statSync('./archivo.txt');
console.log(
    stats.isFile(), //si es un archivo
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbolico
    stats.size //tamaño del archivo
);