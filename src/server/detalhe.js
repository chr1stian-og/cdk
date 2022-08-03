const mongoose = require('mongoose');

const data = new mongoose.Schema({
    timeInicio: {type: String, required: false},
    timeFim: {type: String, required: false},
    place: {type: String, required:false},
    imageNumber: {type: String, required: false},
    resolution: {type: String, required: false},
    type: {type: String, required: false},
    price: {type: String, required: false}
});

module.exports = mongoose.model("detalhe", data);