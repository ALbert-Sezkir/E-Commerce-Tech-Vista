import {Schema, model} from 'mongoose'

const messageSchema = Schema({  
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    
}, { timestamps: true });

const Message = model('Message', messageSchema);

export default Message;
