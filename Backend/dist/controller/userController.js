import Employee from "../model/employee.js";
import bcrypt from "bcryptjs";
import asyncHandler from "../middleware/asyncHandler.js";
import { createToken } from "../utils/createToken.js";
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, course, phone, designation, gender, image } = req.body;
    if (!name || !email) {
        throw new Error("Please fill all the inputs.");
    }
    const existingEmail = await Employee.findOne({ email });
    if (existingEmail) {
        res.status(400).json({ message: "User already exists" });
    }
    const password = email;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const NewUSer = new Employee({
        name,
        email,
        password: hashedPassword,
        phone,
        designation,
        gender,
        image,
        course,
    });
    try {
        await NewUSer.save();
        res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await Employee.findOne({ email });
    if (!user) {
        res.status(401).json({ message: "userNot Found" });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        res.status(401).json({ message: "Invalid Password" });
    }
    createToken(user._id, res);
    res.status(200).json({ message: "Login Success" });
});
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out successfully" });
});
const getAllUser = asyncHandler(async (req, res) => {
    const user = await Employee.find();
    res.status(200).json(user);
});
const getEmployeeById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await Employee.findById(id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
});
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await Employee.findById(id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    const { name, email, phone, designation, gender, image, course, isAdmin } = req.body;
    try {
        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        user.designation = designation || user.designation;
        user.gender = gender || user.gender;
        user.image = image || user.image;
        user.course = course || user.course;
        await user.save();
        res.status(200).json({ message: "User updated successfully" });
    }
    catch (error) {
        res.status(401).json(error);
    }
    //     const updatedUser=await Employee.findByIdAndUpdate(id,{name,email,phone,designation,gender,image,course,isAdmin});
    //     res.status(200).json(user);
});
const deleteEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await Employee.findById(id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    await user.deleteOne({ _id: id });
    res.status(200).json({ message: "User deleted successfully" });
});
export { registerUser, loginUser, logoutUser, getAllUser, updateUser, deleteEmployee, getEmployeeById, };
