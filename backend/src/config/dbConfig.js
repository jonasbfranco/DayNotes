const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://root:password@cluster0.ae2xvvz.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    //useNewUrlParser: true,
    //useUnifieldTopoLogy: true
});

module.exports = connection;




