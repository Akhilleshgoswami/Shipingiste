import ProductModel from "../module/ProductModel.js";
import ErrorHandelar from "../utils/errorhandler.js";
import { CatchAsynceError } from "../Middleware/catchasynceError.js";
import ApiFeactures from "../utils/apifeatures.js";
// Create Product
const createProduct = CatchAsynceError(async (req, res, next) => {
  const prodcut = await ProductModel.create(req.body);
  res.status(200).json({
    success: true,
    prodcut,
  });
});

// get all product
const getAllProducts = CatchAsynceError(async (req, res) => {
  const resultPerPage = 5;
  const prodcutCount =  await ProductModel.countDocuments()
 const apiFeature = new  ApiFeactures(ProductModel.find(),req.query).search().filter().pagination(resultPerPage);
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    products,
    prodcutCount
  });
});

// get products
const getOneProduct = CatchAsynceError(async (req, res, next) => {
  let products = await ProductModel.findById(req.params.id);

  if (!products) {
    return next(new ErrorHandelar("Product Not found", 404));
  }

  res.status(200).json({ success: true, products });
});
// update product
const updateProdcuts = CatchAsynceError(async (req, res, next) => {
  let products = await ProductModel.findById(req.params.id);

  if (!products) {
    return next(new ErrorHandelar("Product Not found", 404));
  }
  products = await ProductModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(products);
});
const deleteProducts = CatchAsynceError(async (req, res, next) => {
  let products = await ProductModel.findById(req.params.id);

  if (!products) {
    return next(new ErrorHandelar("Product Not found", 404));
  }
  await products.remove();
  res
    .status(200)
    .json({ success: true, message: "Prodcut deleted successFully" });
});
export {
  getAllProducts,
  createProduct,
  updateProdcuts,
  deleteProducts,
  getOneProduct,
};
