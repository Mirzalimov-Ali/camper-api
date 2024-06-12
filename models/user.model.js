const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter vaild Email address"
        ]
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    isActive: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema)