const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 10});

        return res.json(products);
    },

    async show(req, res) {
        // postagem do produto pelo id
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        // criação de produto
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        // atualização do produto
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async destroy(req, res) {
        // deleção do produto
        await Product.findByIdAndDelete(req.params.id);

        return res.send();
    },

};

