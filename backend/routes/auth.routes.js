import express from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { login, logout } from "../controllers/login.controller.js";
const router=express.Router();
router.post("/login",login)
router.get("/logout",logout)
export default router;
