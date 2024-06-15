const mongoose = require("mongoose")

const campingPlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
    },
    working_hour: {
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        }
    }, 
    home_page: {
        type: String, 
        default: false
    },
    description: {
        type: String,
        maxLength: 50,
    },
    map: {
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
    }
})

module.exports = mongoose.model("CampingPlace", campingPlaceSchema)