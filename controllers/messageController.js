import mongoose from 'mongoose';
import Message from '../models/messageModel.js';



export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ error: 'All fields are required' }); // Return error response
      return; // Exit function early
    }

    const newMessage = await Message.create({ name, email, message });

    res.status(200).json(newMessage); // Return successful response
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong creating the message' }); // Return error response
  }
};

