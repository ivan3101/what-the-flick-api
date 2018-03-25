const Mongoose = require('mongoose');
const movieSchema = new Mongoose.Schema({
    'title': {
        type: String,
        required: [true, 'El titulo de la pelicula es requerido']
    },
    'story': {
        type: String,
        required: [true, 'La descripción de la pelicula es requerida']
    },
    'imageUrl': {
        type: String,
        required: [true, 'La imagen de la pelicula es requerida']
    },
    'category': {
        type: String,
        required: [true, 'La categoria de la pelicula es requerida']
    },
    'director': {
        type: String,
        required: [true, 'El director de la pelicula es requerido']
    },
    'writer': {
        type: String,
        required: [true, 'El escritor de la pelicula es requerido']
    },
    'cast': {
        type: String,
        required: [true, 'El elenco de la pelicula es requerido']
    },
    'year': {
        type: String,
        required: [true, 'El año de la pelicula es requerido']
    },
    'rating': {
        type: String,
        required: [true, 'La calificación de la pelicula es requerida']
    },
    'duration': {
        type: String,
        required: [true, 'La duracion de la pelicula es requerida']
    },
    'age': {
        type: String,
        required: [true, 'La clasificación de la pelicula es requerida']
    },
    'trailer': {
        type: String,
        required: [true, 'El trailer de la pelicula es requerido']
    },
    'isActive': {
        type: Boolean,
        default: true
    }
});

movieSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.__v;
    delete obj.isActive;
    return obj;
};

module.exports = Mongoose.model('Movie', movieSchema);