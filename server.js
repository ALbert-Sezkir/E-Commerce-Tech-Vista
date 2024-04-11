import dotenv from 'dotenv'; 
dotenv.config();
import mongoose from 'mongoose';




const mongoUri = process.env.MONGO_URI

const dbConnect = async ()=> {
     try {
     if(!mongoUri) throw new Error ('Please define MONGO_URI in .env file')

       const db = await mongoose.connect(mongoUri)
       console.log('DataBase connected');
    } catch (err) {
        console.log(err.message)
        process.exit(0)
    }
}


export default dbConnect; 



