import fs from 'fs';

fs.writeFileSync('example.txt', 'Hola, Node.js!'); // Crea o sobrescribe un archivo con este texto

console.log(fs.readFileSync('example.txt', 'utf8')); // Lee el archivo y muestra su contenido
