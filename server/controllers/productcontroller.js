const ProductModel = require("../models/productModel");

// Create Product -- Admin
const createProduct = async (req, res) => {
  // let images = [];
  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];
  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "products",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }
 // req.body.images = imagesLinks;
 // req.body.user = req.user.id;


  const product = await ProductModel.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};



const getallproducts = (req, res) => {
  try  {
    const Products = ProductModel.find();
    res.status(200).send({
      status: true,
      message: "getting products",
      data: Products,
    });
} 

  catch (error) {
    error,
      res.status(500).send({
        status: false,
        message: "not getting products",
        error,
      });
  }
};




const updateproduct= async ()=>{

  try{

    let Product= await Product.findById(req.params.id);

    if(!Product){

      return res.status(500).send({
        success: false,
        message: "Product not found"
      })
    }


    Product= await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    })

    res.status(200).json({
      success: true,
      Product
    })

  }
  catch{

  }

}


module.exports = { getallproducts, createProduct, updateproduct };
