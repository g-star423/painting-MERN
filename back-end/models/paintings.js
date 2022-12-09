const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    name: String,
    artist: String,
    year: Number,
    style: String,
    image: String
})

const Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;