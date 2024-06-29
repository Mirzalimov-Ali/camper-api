const express = require('express')
const { addNewCaravan, getAllCaravans } = require('../controllers/caravan.controller')
const upload = require("../utils/fileUpload")

const router = express.Router()

router.post("/addNewCaravan", upload.single("caravanCarPhoto"), addNewCaravan)

router.get("/getAllCaravans", getAllCaravans)

module.exports = router