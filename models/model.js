import mongoose from "mongoose";

let { Schema, model } = mongoose
let sChema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 18,
        trim: true
    },
    age: {
        type: Number,
        min: 6,
        max: 60,
        required: true
    },
    email: {
        type: String,
        unique: true,
        minlength: 13,
        maxlength: 45,
        trim: true
    }
})
let student = model("student", sChema)
export default student