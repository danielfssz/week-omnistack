// Arquivo de rotas da aplicação
const express = require("express");

const routes = express.Router();

const TweetController = require("./controllers/TweetController");
const LikesController = require("./controllers/LikesController");

routes.get("/", (req, res) => {
  return res.send("Hello World");
});

// Rotas para Tweet
routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

// Rota para dar Like
routes.post("/likes/:id", LikesController.store);

module.exports = routes;
