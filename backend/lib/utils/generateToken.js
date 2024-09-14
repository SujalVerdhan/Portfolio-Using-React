import jwt from "jsonwebtoken"
export const generateToken=async(userId,res)=>{
    console.log("userid",userId)
const token= jwt.sign({userId},process.env.JWTSECRET,{expiresIn:"1h"})

const data=await res.cookie('jwt',token,{
    // maxAge:2*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict",

})
console.log(data)

}

    