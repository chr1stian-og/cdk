const mongoose = require('mongoose');

const data = new mongoose.Schema({
    Nome: {type: String, required: false},
    Apelido: {type: String, required: false},
    Sexo: {type: String, required:false},
    Idade: {type: String, required: false},
    Ocupacao: {type: String, required: false},
    Sexo: {type: String, required: false},
    Endereco: {type: String, required: false}
});

module.exports = mongoose.model("data", data);