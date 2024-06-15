const express = require('express')
const { addNewCaravan, getAllCaravans } = require('../controllers/caravan.controller')

const router = express.Router()

router.post("/addNewCaravan", addNewCaravan)

router.get("/getAllCaravans", getAllCaravans)

module.exports = router