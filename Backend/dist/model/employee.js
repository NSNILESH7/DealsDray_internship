import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        default: "1234",
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
});
export default mongoose.model("Employee", employeeSchema);
