const express = require("express")
const { addNewCampingPlace, getAllCampingPlaces } = require("../controllers/campingPlace.controller")

const router = express.Router()

router.post("/addNewCampingPlace", addNewCampingPlace)

router.get("/getAllCampingPlaces", getAllCampingPlaces)

module.exports = router