const Movie = require('../models/movie.model');

module.exports.getAllMovies = async (req, res) => {
    const quantity = req.query.quantity || 8;
    const page = req.query.page || 1;
    const movies = await Movie.find({
        'isActive': true
    })
        .skip((quantity * page) - quantity)
        .limit(+quantity);
    res
        .status(200)
        .json(movies);
};

module.exports.getMoviesByCategory = async (req, res) => {
    const quantity = req.query.quantity || 10;
    const page = req.query.page || 1;
    const category = req.params.category;
    const movies = await Movie.find({
        'category': category,
        'isActive': true
    })
        .skip((quantity * page) - quantity)
        .limit(+quantity);

    res
        .status(200)
        .json(movies);
};

module.exports.getMovieById = async (req, res) => {
    const id = req.params.id;
    const movie = await Movie.findOne({
        '_id': id,
        'isActive': true
    });
    res
        .status(200)
        .json(movie);
};

module.exports.addMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res
        .status(201)
        .json({
            'statusCode': 201,
            'payload': {
                'statusCode': 201,
                'error': null,
                'message': 'El articulo ha sido creado con exito'
            }
        });
};
