import mongoose from "mongoose"
const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    }  ,
    github:{
        type:String,
        required:true,
    }  ,
    demo:{
        type:String,
        required:true,
    }  ,
    img:{
        type:String,
        required:true,
    }  
})
const projectModel=mongoose.model("projectModel",projectSchema);
export default projectModel;