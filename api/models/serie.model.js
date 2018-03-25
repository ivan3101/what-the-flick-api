const Mongoose = require('mongoose');
const serieSchema = new Mongoose.Schema({
    'title': {
        type: String,
        required: [true, 'El titulo de la serie es requerido']
    },
    'story': {
        type: String,
        required: [true, 'La descripción de la serie es requerida']
    },
    'imageUrl': {
        type: String,
        required: [true, 'La imagen de la serie es requerida']
    },
    'category': {
        type: String,
        required: [true, 'La categoria de la serie es requerida']
    },
    'creator': {
        type: String,
        required: [true, 'El creador de la serie es requerido']
    },
    'writer': {
        type: String,
        required: [true, 'El escritor de la serie es requerido']
    },
    'cast': {
        type: String,
        required: [true, 'El elenco de la serie es requerido']
    },
    'year': {
        type: String,
        required: [true, 'El año de la serie es requerido']
    },
    'rating': {
        type: String,
        required: [true, 'La calificación de la serie es requerida']
    },
    'duration': {
        type: String,
        required: [true, 'La duracion de la serie es requerida']
    },
    'age': {
        type: String,
        required: [true, 'La clasificación de la serie es requerida']
    },
    'trailer': {
        type: String,
        required: [true, 'El trailer de la serie es requerido']
    },
    'isActive': {
        type: Boolean,
        default: true
    }
});

serieSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.__v;
    delete obj.isActive;
    return obj;
};

module.exports = Mongoose.model('serie', serieSchema);