const router = require("express").Router();
let Product = require('../models/productItem.models')


router.route("/").get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
    Product.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {

    const id = req.body.id
    const imgURL = req.body.imgURL
    const item = req.body.item
    const price = req.body.price
    const description = req.body.description
    const stock = Number(req.body.stock)

    const newProduct = new Product({
        id,
        imgURL,
        item,
        price,
        description,
        stock
    })

    newProduct.save()
        .then(() => res.json("New Product Added"))
        .catch(err => res.status(400).json("Error" + err));
});


module.exports = router;