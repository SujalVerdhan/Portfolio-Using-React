import projectModel from "../models/projects.model.js";
// import cloudinary from "cloudinary"

import cloudinary from "../server.js"



const imageRemover=async(image)=>{
    try{
    await cloudinary.uploader.destroy(image.split("/").pop().split(".")[0])
    }catch(err){
        console.log(err)
        return res.status(400).json({error:"error in uplaoding image"})
        
    }
}
export  const add=async(req,res)=>{
const {title,github,demo,img}=await req.body;
console.log(title,github,demo,img)
try{
    if(!title||!github||!demo||!img){
        return res.status(400).json({error:"Please fill all the fields"})
    }
const project=new projectModel({
    title,
    github,
    demo,
    img,
})
if(!project){
    return res.status(401).json({error:"Project not created"})
}
await project.save();
res.status(200).json("Project Saved")


}catch(err){
    
   res.status(500).json({error:"Internal server error"})
}
}

export const get=async(req,res)=>{
try{
const data=await projectModel.find({})
if(!data){
    return res.status(400).json({error:"No data found"});

}
return res.status(200).json(data)
}catch(err){
    console.log(err)
return res.status(500).json({error:"Internal server error"})
}
}
export const deleteItem=async(req,res)=>{
    const {id}=await req.params
try{
const project=await projectModel.findByIdAndDelete({_id:id});

if(!project){
    return res.status(400).json({error:"No project found"});

}

// const response=await cloudinary.uploader.destroy(project.img.split("/").pop().split(".")[0])
await imageRemover(project.img)
// console.log("res",response)
return res.status(200).json("Project Deleted")
}catch(err){
    console.log(err)
    return res.status(500).json({error:"Internal server error"})
}
}

export const update=async(req,res)=>{
    const {id}=await req.params
    const {title,github,img,demo}=await req.body;
try{
const project=await projectModel.findById({_id:id});
if(!project){
    return res.status(400).json({error:"No project found"});

}
if(img){
//   const response=  await cloudinary.uploader.destroy(project.img.split("/").pop().split(".")[0])
await imageRemover(img)
//   console.log(response)
}
project.img=img||project.img
project.title= title||project.title
project.github=github||project.github
project.demo=demo||project.demo
await project.save();
return res.status(200).json("Project updated")
}catch(err){
    console.log(err)
    return res.status(500).json({error:"Internal server error"})
}
}


export const getupdate=async(req,res)=>{
    const {id}=await req.params
    
try{
const project=await projectModel.findById({_id:id});
if(!project){
    return res.status(400).json({error:"No project found"});

}

return res.status(200).json(project);
}catch(err){
    console.log(err)
    return res.status(500).json({error:"Internal server error"})
}
}


