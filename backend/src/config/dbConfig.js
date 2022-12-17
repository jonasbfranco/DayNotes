require('dotenv').config()

const mongoose = require('mongoose');

<<<<<<< Updated upstream
const dbConfig = 'mongodb+srv://root:password@cluster0.ae2xvvz.mongodb.net/annotations?retryWrites=true&w=majority';
=======
const dbConfig = `mongodb+srv://root:${process.env.SENHA_MONGO}@cluster0.ae2xvvz.mongodb.net/${process.env.BANCO_MONGO}?retryWrites=true&w=majority`;
//const dbConfig = 'mongodb+srv://root:Kemily@cluster0.ae2xvvz.mongodb.net/annotations?retryWrites=true&w=majority';
>>>>>>> Stashed changes

const connection = mongoose.connect(dbConfig, {
    //useNewUrlParser: true,
    //useUnifieldTopoLogy: true
});

module.exports = connection;




