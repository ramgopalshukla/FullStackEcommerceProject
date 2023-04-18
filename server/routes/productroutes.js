
const express= require('express')
const { getallproducts, createProduct, updateproduct, deleteProducts, getproductdetails} = require('../controllers/productcontroller')


const router= express.Router()
router.get('/products', getallproducts);
router.post('/product/new', createProduct);
router.put("/product/:id",updateproduct);
router.delete("/product/:id", deleteProducts);
router.get("/product/:id", getproductdetails);

module.exports = router;

