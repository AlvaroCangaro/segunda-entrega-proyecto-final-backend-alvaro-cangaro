import { Router } from 'express';
const router = Router();

import { newCart, deleteCart, getProductsCart, saveProductsCart, deleteProductCart } from '../controllers/cart.js';

router.post('/', newCart);
router.delete('/:id', deleteCart);
router.get('/:id/productos', getProductsCart);
router.post('/:id/productos', saveProductsCart);
router.delete('/:id/productos/:id_prod', deleteProductCart);

export default router;