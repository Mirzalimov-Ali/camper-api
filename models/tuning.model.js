const mongoose = require("mongoose")

const tuningSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true,
    },
    license: {
        type: String,
        required: true,
        enum: ["1종 보통", "2종 보통"],
    },
    people: {
        type: Number,
        required: true,
        max: 6,
    },
    date: {
        type: String,
        required: false,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
        default: "0.0",
    },
    photo: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model("Tuning", tuningSchema)