const express = require('express')
const { addNewTuning, getAllTunings } = require('../controllers/tuning.controller')

const router = express.Router()

router.post("/addNewTuning", addNewTuning)

router.get("/getAllTunings", getAllTunings)

module.exports = router