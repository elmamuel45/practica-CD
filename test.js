// test/test.js
const assert = require('chai').assert;
const http = require('http');

// Ajusta la ruta y el nombre del archivo si es necesario
const app = require('./app');

describe('Aplicación web', () => {
  let appServer;

  // Antes de las pruebas, inicia el servidor
  before((done) => {
    appServer = http.createServer(app).listen(3000, () => {
      console.log('Servidor de prueba iniciado en el puerto 3000');
      done();
    });
  });

  // Después de las pruebas, detén el servidor
  after((done) => {
    appServer.close(() => {
      console.log('Servidor de prueba detenido');
      done(); // Asegurarse de que Mocha espere hasta que se detenga el servidor
    });
  });

  it('Debe retornar un mensaje exitoso', (done) => {
    http.get('http://localhost:3000', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.include(data, 'Hola, esta es mi aplicación web simple.');
        done();
      });
    });
  });
});
