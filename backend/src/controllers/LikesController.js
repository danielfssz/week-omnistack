const Tweet = require("../models/Tweet");

module.exports = {
  async store(req, res) {
    // Procura o Tweet pelo id passado por parametro
    const tweet = await Tweet.findById(req.params.id);

    // Soma 1 na quantidade de likes
    tweet.set({ likes: tweet.likes + 1 });

    // Salva o tweet no banco de dados
    await tweet.save();

    // Recupera a instancia do Socket.io e emite a informação para todos que estiverem escutando o Socket
    req.io.emit("like", tweet);

    // Retorna o tweet
    res.json(tweet);
  }
};
