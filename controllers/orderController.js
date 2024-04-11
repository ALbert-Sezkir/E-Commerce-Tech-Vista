import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
    const { products} = req.body;
  
    if (!products || !products.length) {
      return res.status(400).json({ message: 'No products provided.' });
    }
  
    try {
      const order = await Order.create({
        user: req.user._id,
        products,
      });
  
      //await order.save();
  
      return res.status(201).json(order);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  


// get all orders from the database 

 export const getUserOrders = async (req, res) =>{ 
    try {
      const orders = await Order.find({ user: req.user._id }).populate('products.productId');
  
      if (!orders.length) {
        return res.status(200).json({ message: 'No orders yet.' });
      }
  
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  //get all my orders from the database

  export const getMyOrders = async (req, res) => {
    Order.find({ user: req.user._id })
        .then(orders => res.json(orders))
        .catch(err => res.status(500).json('Error: ' + err));
};

