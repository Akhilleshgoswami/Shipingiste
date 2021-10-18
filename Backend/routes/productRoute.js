
import { getAllProducts } from '../controllers/productController.js';
import Express from 'express';
const router = Express.Router();
router.get('/product',getAllProducts)

export default router;