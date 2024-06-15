const UsedCar = require("../models/usedCar.model")
const uuid = require('uuid')

const addNewUsedCar = async (req, res) => {
    try {
        const {name, type, cost, license, people, date, company, location, rating} = req.body

        const apiKey = uuid.v4()

        const usedCar = await UsedCar.create({
            name, type, cost, license, people, date, company, location, rating, apiKey
        })

        res.status(201).json({
            success: true,
            data: usedCar
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getAllUsedCars = async (req, res) => {
    try {
        const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 2
        const limit = parseInt(req.query.limit || pageLimit)
        const page = parseInt(req.query.page || 1)
        const total = await UsedCar.countDocuments()

        const usedCar = await UsedCar.find().skip(page * limit - limit)

        res.status(201).json({
            pageCount: Math.ceil(total / limit),
            success: true,
            data: usedCar,
            currentPage: page
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {addNewUsedCar, getAllUsedCars}