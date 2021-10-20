
import { getAllProducts,createProduct, updateProdcuts, deleteProducts, getOneProduct } from '../controllers/productController.js';
import Express from 'express';
const router = Express.Router();
// getting product from the db
router.get('/product',getAllProducts)
// creating product on the db
router.post('/product/new',createProduct)

 router.route('/product/:id').put(updateProdcuts).delete(deleteProducts).get(getOneProduct)
 
export default router;