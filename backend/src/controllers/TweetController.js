const Tweet = require("../models/Tweet");

module.exports = {
  async index(req, res) {
    // Busca no banco de dados todos os Tweets ordenando pelo campo createdAt ordem decrescente
    const tweets = await Tweet.find({}).sort("-createdAt");

    return res.json(tweets);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    // Recupera a instancia do Socket.io e emite a informação para todos que estiverem escutando o Socket
    req.io.emit("tweet", tweet);

    res.json(tweet);
  }
};
