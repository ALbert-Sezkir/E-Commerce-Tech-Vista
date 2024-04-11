import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const userRegister = async (req, res) => {
    try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });

    await user.save();

    const token = jwt.sign(
        { id: user._id, name: user.name, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return res.status(201).json({  "message": "User created successfully" ,token });
}
catch(err){
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null}) 
} }

export const userLogin = async (req, res) => {
    try{
    const { email, password } = req.body;

    const user = await User.findOne({ email }); // Use User model

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
        { id: user._id, name: user.name, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Login successful' ,token });
    }
catch(err){
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : null}) 
} }