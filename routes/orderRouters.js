import express from 'express';
import { createOrder, getMyOrders, getUserOrders } from '../controllers/orderController.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

// POST route to create an order

router.post('/', authenticate, createOrder);

// GET route to get all orders of a user
router.get('/', authenticate, getUserOrders);

//GET route to get all orders of the authenticated user
router.get('/', authenticate, getMyOrders) 

export default router;