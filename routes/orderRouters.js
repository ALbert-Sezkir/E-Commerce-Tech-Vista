import express from 'express';
import { createOrder, getUserOrders } from '../controllers/orderController.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

// POST route to create an order

router.post('/', authenticate, createOrder);

// GET route to get all orders of a user
router.get('/', authenticate, getUserOrders);

router.get('/:id', authenticate, getUserOrders);


export default router;