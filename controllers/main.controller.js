const Product = require('../model/Product');

module.exports = {
    getProducts: (req, res) => {
        const product = new Product();
        product.getAll()
            .then((productList) => { res.send(productList) })
            .catch((err) => {
                res.status(500);
                res.send({Error: err});
            });
    }
}