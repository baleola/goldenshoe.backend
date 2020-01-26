const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    imgURL: String,
    item: String,
    price: String,
    description: String,
    stock: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;