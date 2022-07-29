import { Router } from 'express';
const router = Router();
// const path = require('path');

import products from './products.js';
import cart from './cart.js';

router.use('/productos', products);
router.use('/carrito', cart);

export default router;