const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/lolapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});