import express from "express";
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary"
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js"
dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    cloud_key:process.env.CLOUDINARY_API_KEY,
    cloud_secret:process.env.CLOUDINARY_API_SECRET,
});
const app=express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
})