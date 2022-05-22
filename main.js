require('dotenv').config();

const Servidor = require('./src/server');

//INSTANCIA DE SERVIDOR
const server = new Servidor();

server.listen() //SERVIDOR
