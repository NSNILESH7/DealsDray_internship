import express from "express";
import { registerUser, loginUser, logoutUser, getAllUser, updateUser, deleteEmployee, getEmployeeById } from "../controller/userController.js";


const router=express.Router();

router.post("/create",registerUser);
router.post("/login",loginUser);
router.get("/employeelist",getAllUser);
router.get("/employee/:id",getEmployeeById);
router.put("/update/:id",updateUser);
router.get("/logout",logoutUser);
router.delete("/delete/:id",deleteEmployee);
export default router;
