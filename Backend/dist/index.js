import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import uploadImageRoute from "./routes/uploadImageRoute.js";
import path from "path";
const app = express();
dotenv.config();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected to MongoDB");
});
app.use("/user", userRoute);
app.use("/upload", uploadImageRoute);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
