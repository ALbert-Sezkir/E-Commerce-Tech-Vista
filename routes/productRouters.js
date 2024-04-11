import express from 'express';
const router = express.Router();
import {createProduct, getProducts, getProductById, updateProduct, deleteProduct} 
from  '../controllers/productController.js';




//CRUD - Create, Read, Update, Delete 

// Create
router.post('/', createProduct)
// Read 
router.get('/', getProducts) 
// Get single product
router.get('/:id', getProductById)
// Update 
router.put('/:id', updateProduct) 

//Delete 
router.delete('/:id', deleteProduct)



export default router; 