// .js --> por defecto utiliza COMMONJS
// .mjs --> porA UTILIZAR ES MODULES
// .cjs --> para utilizar CommonJS
import {sum, sub, mul, div} from './sum.mjs'; // sum = require('./sum.js'); // importamos el modulo
console.log(sum(10,20));
console.log(sub(10,20));
console.log(mul(10,20));
console.log(div(10,20));