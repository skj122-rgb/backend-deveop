import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST:${
        connectionInstance.connection.host}`);//check it
    }
    catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1)//check it
    }
}


export default connectDB;