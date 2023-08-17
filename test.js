// test/test.js
const assert = require('chai').assert;
const http = require('http');

const app = require('./app'); // Ajusta la ruta si es necesario

describe('Aplicación web', () => {
  let server;
  const PORT = 3001; // Puerto diferente para las pruebas

  // Antes de las pruebas, inicia el servidor
  before((done) => {
    server = http.createServer(app).listen(PORT, () => {
      console.log(`Servidor de prueba iniciado en el puerto ${PORT}`);
      done();
    });
  });

  // Después de las pruebas, detén el servidor
  after((done) => {
    server.close(() => {
      console.log('Servidor de prueba detenido');
      done(); // Asegurarse de que Mocha espere hasta que se detenga el servidor
    });
  });

