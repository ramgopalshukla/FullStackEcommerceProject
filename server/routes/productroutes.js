
const express= require('express')
const { getallproducts, createProduct } = require('../controllers/productcontroller')

const router= express.Router()


router.get('/products', getallproducts);
router.post('/product/new', createProduct);

router.patch("/product/:id",updateProduct)

module.exports = router