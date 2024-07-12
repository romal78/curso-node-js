//mosulo nativo OS
import { platform, version, release, arch, cpus, totalmem, freemem, networkInterfaces, hostname, userInfo, uptime } from 'node:os';
console.log('Informacion del sistema operativo');
console.log('________________________________');
console.log('Nombre del sistema operativo',platform());
console.log('Version del sistema operativo',version());
console.log('Release del sistema operativo',release());
console.log('Arquitectura del sistema operativo',arch());
console.log('Informacion del procesador',cpus()); // vamos a poder escalar procesos en node
console.log('Memoria total',totalmem()/1024/1024);
console.log('Memoria libre',freemem()/1024/1024);
console.log('Informacion de red',networkInterfaces());
console.log('Informacion de host',hostname());
console.log('Informacion de sistema',userInfo());
console.log('Informacion de sistema',uptime()/60/60);    
console.log('________________________________');
