import mongoose from "mongoose";
import { ENV } from "./envVars.js";

const MONGO_URI=ENV.MONGO_URI;
export const db=async()=>{


    try {
        const connection=await mongoose.connect(MONGO_URI);
        if(connection){
            console.log("db connected");
        }

    } catch (error) {
        console.log(error.message);
    }

}