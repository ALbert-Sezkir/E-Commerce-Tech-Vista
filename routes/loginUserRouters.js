import express from 'express';
import {userLogin } from '../controllers/userController.js';



const router = express.Router();


//POST route to login a user
router.post('/', userLogin);



export default router;