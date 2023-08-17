// test/test.js
const assert = require('chai').assert;
const http = require('http');

const app = require('../app'); // Ajusta la ruta si es necesario

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

  it('Debe retornar un mensaje exitoso', (done) => {
    http.get(`http://localhost:${PORT}`, (res) => {
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

  // Ejemplo de prueba asincrónica utilizando promesas
  it('Debe resolver una promesa', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1002));
    // Hacer aserciones aquí si es necesario
  }).timeout(3000); // Ajusta el timeout a 3000ms (3 segundos)
});
