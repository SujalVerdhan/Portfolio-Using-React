import jwt from "jsonwebtoken"
import User from "../models/userModel.js";

export const protectRoute=async(req,res,next)=>{
    try{
    const token=await req.cookies.jwt;
    
    if(!token){
      return  res.status(400).json({error:"No token generated or unauthorised user"})
    }
    const decode=jwt.verify(token,process.env.JWTSECRET,(err,res)=>{
        if(err){
            return "token expired";
        }
        return res;
    });

    if(decode==="token expired"){
        return res.status(401).json({error:"Token expired"});
    }
    if(!decode){
      return  res.status(400).json({error:"User not verified"});

    }
    const user=await User.findById(decode.userId).select("-password");
if(!user){
   return res.status(400).json({error:"No user found"});

}
req.user=user;
next()
    }catch(err){
console.log(err)
return res.status(500).json({error:"Internal Server Error"});
    }
}