const express = require('express');
const router = express.Router();
const {createProduct,getAllProducts}=require('../controllers/productController');

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);

module.exports=router;