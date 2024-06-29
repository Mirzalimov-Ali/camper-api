const express = require('express')
const { addNewTuning, getAllTunings } = require('../controllers/tuning.controller')
const upload = require("../utils/fileUpload")

const router = express.Router()

router.post("/addNewTuning", upload.single("tuningCarPhoto"), addNewTuning)

router.get("/getAllTunings", getAllTunings)

module.exports = router