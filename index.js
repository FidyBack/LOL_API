const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

// DataBase
mongoose.connect(
    'mongodb://localhost:27017/lol-api',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});