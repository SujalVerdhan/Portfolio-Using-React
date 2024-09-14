import express from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { add, deleteItem, get, getupdate, update } from "../controllers/portfolio.controller.js";
const router=express.Router();
router.post("/add",protectRoute,add)

router.get("/get",get)
router.get("/delete/:id",protectRoute,deleteItem)
router.get("/update/:id",protectRoute,getupdate)
router.post("/update/:id",protectRoute,update)
export default router