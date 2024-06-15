const Motor = require("../models/motor.model")
const uuid = require("uuid")

const addNewMotor = async (req, res) => {
    try {
        const {name, cost, type, license, people, date, company, location, rating} = req.body
 
        const apiKey = uuid.v4()

        const motor = await Motor.create({
            name, cost, type, license, people, date, company, location, rating, apiKey
        }) 

        res.status(201).json({
            success: true,
            data: motor 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
    
}

const getAllMotors = async (req, res) => {
    try {
        const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 2
        const limit = parseInt(req.query.limit || pageLimit)
        const page = parseInt(req.query.page || 1)
        const total = await Motor.countDocuments()

        const motor = await Motor.find().skip(page * limit - limit)

        res.status(201).json({
            pageCount: Math.ceil(total / limit),
            success: true,
            data: motor,
            currentPage: page 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {addNewMotor, getAllMotors}