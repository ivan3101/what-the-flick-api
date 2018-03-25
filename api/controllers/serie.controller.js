const Serie = require('../models/serie.model');

module.exports.getAllSeries = async (req, res) => {
    const quantity = req.query.quantity || 8;
    const page = req.query.page || 1;
    const series = await Serie.find({
        'isActive': true
    })
        .skip((quantity * page) - quantity)
        .limit(+quantity);
    res
        .status(200)
        .json(series);
};

module.exports.getSeriesByCategory = async (req, res) => {
    const quantity = req.query.quantity || 10;
    const page = req.query.page || 1;
    const category = req.params.category;
    const series = await Serie.find({
        'category': category,
        'isActive': true
    })
        .skip((quantity * page) - quantity)
        .limit(+quantity);

    res
        .status(200)
        .json(series);
};

module.exports.getSerieById = async (req, res) => {
    const id = req.params.id;
    const serie = await Serie.findOne({
        '_id': id,
        'isActive': true
    });
    res
        .status(200)
        .json(serie);
};

module.exports.addSerie = async (req, res) => {
    const serie = new Serie(req.body);
    await serie.save();
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
