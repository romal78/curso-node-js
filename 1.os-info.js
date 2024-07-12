//mosulo nativo OS
const os = require('node:os');
console.log('Informacion del sistema operativo');
console.log('________________________________');
console.log('Nombre del sistema operativo',os.platform());
console.log('Version del sistema operativo',os.version());
console.log('Release del sistema operativo',os.release());
console.log('Arquitectura del sistema operativo',os.arch());
console.log('Informacion del procesador',os.cpus()); // vamos a poder escalar procesos en node
console.log('Memoria total',os.totalmem()/1024/1024);
console.log('Memoria libre',os.freemem()/1024/1024);
console.log('Informacion de red',os.networkInterfaces());
console.log('Informacion de host',os.hostname());
console.log('Informacion de sistema',os.userInfo());
console.log('Informacion de sistema',os.uptime()/60/60);    
console.log('________________________________');
