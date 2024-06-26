const Tuning = require("../models/tuning.model")
const uuid = require("uuid")

const addNewTuning = async (req, res) => {
    try {
        const {name, type, cost, license, people, date, company, location, rating} = req.body
        
        const apiKey = uuid.v4()

        const tuning = await Tuning.create({
            name, type, cost, license, people, date, company, location, rating, apiKey, tuningCarPhoto: req.file ? "/uploads/tunings" + req.file.filename : "",
        })

        res.status(201).json({
            success: true,
            data: tuning
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getAllTunings = async (req, res) => {
    try {
        const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 2
        const limit = parseInt(req.query.limit || pageLimit)
        const page = parseInt(req.query.page || 1)
        const total = await Tuning.countDocuments()

        const tuning = await Tuning.find().skip(page * limit - limit)
        
        res.status(201).json({
            pageCount: Math.ceil(total / limit),
            success: true,
            data: tuning,
            currentPage: page 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {addNewTuning, getAllTunings}