import mongoose from 'mongoose';
import Product from '../models/productModel.js'


/**
 * @description Creates a new product and saves it to the database  
 */
export const createProduct = async (req, res) => {
    try {
    const { name, price, description, category, images } = req.body; 
    

        if(!name || !price || !description || !category || !images) { // istället för title 
            res.status(400);
            throw new Error('All product fields are required');
        }
 
        const newProduct = await Product.create({ name, price, description, category, images });

        if(!newProduct){
            res.status(500);
            throw new Error('Something went wrong creating the product')
        };

        res.status(201).json(newProduct);
}
catch(err){
    //res.status(500).json({ error: 'Error creating product' })
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null
    })
}
    
}


/**
 * @description Get all products from the database  
 */

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find()  //products istället för todos
        res.status(200).json(products)
    }// ger tillbaka en array med resultat av vad den hittar.
    
    catch(err){
        res.json({
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null}) 


    
}}

/**
 * @description Get a single product from the database  
 */
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            res.status(404);
            throw new Error('Product not found');
        }

        res.json(product);
    } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null
        });
    }
};


/**
 * @description Takes an id and Updates product on the database  
 */

export const updateProduct = async (req, res) => {
try {
   
        const id = req.params.id
        if(!mongoose.isValidObjectId(id)){
            res.status(400)
            throw new Error ('You need to provide a valid ObjectId')
        }
        
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        

        if(!product){
            res.status(404);
            throw new Error ('Product not found')
        }
        res.status(200).json(product)


    } catch(err) {
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null})
}


}

//res.status(200).json({message: 'Update'})
//`${URI}/orders`

/**
 * @description Takes an id and Deletes product on the database  
 */

export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id
        if(!mongoose.isValidObjectId(id)){
        res.status(400)
        throw new Error ('You need to provide a valid ObjectId')
    }

    const product = await Product.findByIdAndDelete(id)

    if(!product){
        res.status(404);
        throw new Error ('Product not found')
    }
    
    res.status(200).json(product._id) // 
}
catch (err) {
    res.json({
        message: err.message,
        stack:
         process.env.NODE_ENV === 'development' ? err.stack : null})
    }
    
    
}







