import express from 'express';
import dbConnect from './server.js';
import productRoutes from './routes/productRouters.js';
import messageRoutes from './routes/messageRouters.js';
import userRouters from './routes/userRouters.js';
import loginUserRouters from './routes/loginUserRouters.js';
import orderRouter from './routes/orderRouters.js';



  
const app = express(); 


dbConnect()



app.use(express.json()); // This middleware is needed to parse JSON request bodies
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoutes);

app.use('/api/messages', messageRoutes);

app.use('/api/register', userRouters);

app.use('/api/login', loginUserRouters);

app.use('/api/orders', orderRouter);





//app.use(userRouter);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));

//app.post('/message');







export default app;
