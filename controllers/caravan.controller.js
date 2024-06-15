const Caravan = require("../models/caravan.model")
const uuid = require('uuid')

const addNewCaravan = async (req, res) => {
    try {
        const {name, cost, type, license, people, date, company, location, rating} = req.body

        const apiKey = uuid.v4()

        const caravan = await Caravan.create({
            name, cost, type, license, people, date, company, location, rating, apiKey
        })

        res.status(201).json({
            success: true,
            data: caravan
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getAllCaravans = async (req, res) => {
    try {
        const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 2
        const limit = parseInt(req.query.limit || pageLimit)
        const page = parseInt(req.query.page || 1)
        const total = await Caravan.countDocuments()

        const caravan = await Caravan.find().skip(page * limit - limit)

        res.status(201).json({
            pageCount: Math.ceil(total / limit),
            success: true,
            data: caravan,
            currentPage: page 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {addNewCaravan, getAllCaravans}