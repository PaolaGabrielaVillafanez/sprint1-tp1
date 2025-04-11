// Importamos el módulo 'http' que viene con Node.js para crear servidores web.
import http from 'http';

// Definimos la dirección IP donde el servidor escuchará (localhost en este caso).
const hostname = '127.0.0.1';

// Definimos el puerto en el que se ejecutará el servidor (puede ser cualquier número entre 1024 y 65535).
const port = 3000;

// Creamos el servidor HTTP con una función que maneja las solicitudes (req) y las respuestas (res).
const server = http.createServer((req, res) => {
  // Establecemos el código de estado de la respuesta HTTP (200 = OK).
  res.statusCode = 200;

  // Indicamos el tipo de contenido que vamos a enviar (texto plano).
  res.setHeader('Content-Type', 'text/plain');

  // Enviamos la respuesta al cliente con el mensaje "Hola Mundo".
  res.end('Hola Paola\n');
});

// Iniciamos el servidor para que escuche en el puerto y dirección definidos.
// Una vez que esté corriendo, se ejecuta la función que muestra un mensaje en la consola.
server.listen(port, hostname, () => {
  console.log('Servidor corriendo');
});
