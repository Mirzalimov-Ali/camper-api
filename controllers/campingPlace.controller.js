const CampingPlace = require("../models/campingPlace.model")
const uuid = require('uuid');

const addNewCampingPlace = async (req, res) => {
    try {
        const {name, location, city, phone_number, working_hour, home_page, description, map} = req.body

        const apiKey = uuid.v4()

        const campingPlace = await CampingPlace.create({
            name, location, city, phone_number, working_hour, home_page, description, map, apiKey
        })

        res.status(201).json({
            success: true,
            data: campingPlace
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const getAllCampingPlaces = async (req, res) => {
    try {
        const pageLimit = process.env.DEFAULT_PAGE_LIMIT || 2
        const limit = parseInt(req.query.limit || pageLimit)
        const page = parseInt(req.query.page || 1)
        const total = await CampingPlace.countDocuments()

        const campingPlace = await CampingPlace.find().skip(page * limit - limit)

        res.status(201).json({
            pageCount: Math.ceil(total / limit),
            success: true,
            data: campingPlace,
            currentPage: page
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {addNewCampingPlace, getAllCampingPlaces}