const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Inicializando o express
const app = express();

const server = require("http").Server(app);

// Habilita que o server escute o protocolo WebSocket
const io = require("socket.io")(server);

// Criando a instancia do mongodb
mongoose.connect(
  "mongodb://admin:admin123@ds121455.mlab.com:21455/omnistack-db",
  {
    useNewUrlParser: true
  }
);

// Usa o cors
app.use(cors());

// Cria um middleware na instancia do servidor para utilizar o socket.io
app.use((req, res, next) => {
  req.io = io;
  return next();
});

// Informa ao express que vai utilizar JSON nas requisicoes
app.use(express.json());

// Importando o arquivo de rotas para o express
app.use(require("./routes.js"));

// Habilita o server para ouvir na porta 3000
server.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
