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

  //get specific orders from the database

  export const getMyOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


 
