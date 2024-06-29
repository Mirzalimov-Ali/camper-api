const express = require("express")
const { addNewCampingPlace, getAllCampingPlaces } = require("../controllers/campingPlace.controller")
const upload = require("../utils/fileUpload")

const router = express.Router()

router.post("/addNewCampingPlace", upload.single("campingPlacePhoto"), addNewCampingPlace)

router.get("/getAllCampingPlaces", getAllCampingPlaces)

module.exports = router