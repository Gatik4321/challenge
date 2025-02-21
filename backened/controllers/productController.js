const Product = require('../models/productModel');


async function createProduct(req,res,next){
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}
async function getAllProducts(req, res, next) {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
}

module.exports = {createProduct,getAllProducts};