import express from 'express';
import { userRegister} from '../controllers/userController.js';


const router = express.Router();

// POST route to register a user
router.post('/', userRegister);






export default router;