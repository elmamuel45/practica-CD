// test/test.js
const assert = require('chai').assert;
const http = require('http');

const server = require('../app');

describe('Aplicación web', () => {
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
