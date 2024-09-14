import express, { urlencoded } from "express"
import doenv from "dotenv"
import cors from "cors"
import {v2 as cloudinary } from "cloudinary"
import bodyParser from "body-parser"
import authRoutes from "./routes/auth.routes.js"
import portfolioRoutes from "./routes/portfolio.routes.js"
import connect from "./db/db.js"
import cookieParser from "cookie-parser";
import path from "path"
const app=express();
app.use(cookieParser())
app.use(express.json())

doenv.config();
const __dirname=path.resolve()
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})
export default cloudinary;
console.log(process.env.CLOUDINARY_KEY,process.env.CLOUDINARY_NAME,process.env.CLOUDINARY_SECRET)
// app.use(bodyParser.json())


app.use(urlencoded({extended:true}));
app.use(cors({ origin: 'http://localhost:3000',credentials: true}));


app.use("/api/auth",authRoutes)
app.use("/api/project",portfolioRoutes)
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
app.listen(5000,async()=>{
    await connect()
    console.log("port running on 5000")

})