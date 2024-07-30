import bcryptjs from "bcryptjs";

import { User } from "../models/user.model.js";
export async function signup(req,res){

    try {
        const {email,username,password}=req.body;

        if(!email||!username||!password){
            return res.status(400).json({success:false,message:"all fields are required"});
        }

        const regx= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regx.test(email)){
            return res.status(400).json({success:false,message:"invalid email"});

        }
        if(password.length<6){
            return res.status(400).json({success:false,message:'password must be at least 6 characters'});
        }

        const existsUserByEmail=await User.findOne({email:email});

        if(existsUserByEmail){
            return res.status(400).json({success:false,message:"email already exists"})
        }

        const existsUserByUsername=await User.findOne({username:username});

        if(existsUserByUsername){
            return res.status(400).json({success:false,message:"username already exists"})
        }

        const profile=["/profile1.png","profile2.png","/profile3.png"];

        const image=profile[Math.floor(Math.random()*profile.length)];
         
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt);
       
        const newUser=new User({
            email,
            username,
            password:hashedPassword,
            image
        })

        await newUser.save();

        res.status(201).json({success:true,message:"user created",user:
            {
                ...newUser._doc,
                password:""
            }})


    } catch (error) {
        
        console.log("signup controller",error.message);
        res.status(500).json({success:false,message:"Internal server error"});
    }
}


export async function login(req,res){
    return res.send("login");
}


export async function logout(req,res){

return res.send("logout");
}

