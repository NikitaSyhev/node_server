const Model = require("./Model");

class Product extends Model {
    constructor() {
        super();
    }

    getAll() {
        return this.sendQuery('SELECT * FROM products')
    }
}

module.exports = Product