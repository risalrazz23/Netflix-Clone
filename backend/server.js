import express from 'express';

import authRoutes from './routes/auth.route.js';
import { db } from './config/db.js';
const app=express();


db();
app.use("/api/v1/auth",authRoutes);


app.listen(5000,()=>{
    console.log("server running on port 5000");
})