import { Router } from 'express';
const router = Router();

import { getProducts, getProductById, saveProduct, updateProduct, deleteProduct } from '../controllers/products.js';
import { checkAuth } from '../middlewares/middlewares.js';

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', checkAuth, saveProduct);
router.put('/:id', checkAuth, updateProduct);
router.delete('/:id', checkAuth, deleteProduct);

export default router;