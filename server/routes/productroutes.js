
const express= require('express')
const { getallproducts, createProduct, updateproduct } = require('../controllers/productcontroller')

const router= express.Router()


router.get('/products', getallproducts);
router.post('/product/new', createProduct);
router.put("/product/:id",updateproduct)

module.exports = router;