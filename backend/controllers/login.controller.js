import { generateToken } from "../lib/utils/generateToken.js";
import User from "../models/userModel.js"

import bcrypt from "bcryptjs";
export const login=async(req,res)=>{
    const {email,password}=await req.body;
  
   
    try{
      const user=await User.findOne({email});
      
      if(!user){
         return res.status(404).json({error:"User Not found"})
      }
      const result=await bcrypt.compare(password,user.password);
      
      if(!result){
   return res.status(400).json({error:"Password do not match"})
      }
       generateToken(user._id,res);
      
      return res.status(200).json({_id:user._id,email:user.email})

    }catch(err){
        console.log(err)
    }

}

export const logout=async(req,res)=>{
    try {
       await res.cookie("jwt", "", { maxAge: 0 });
      return  res.json({ message: "Logged Out Successfully" });
      } catch (err) {
        res.status(500).json("Internal Server Error");
      }
}