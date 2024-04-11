import express from 'express';
import  {createMessage}  from '../controllers/messageController.js';
const router = express.Router();



// POST route to send messages
router.post('/', createMessage) 

export default router;