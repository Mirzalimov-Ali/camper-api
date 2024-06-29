const express = require("express")
const { addNewMotor, getAllMotors } = require("../controllers/motor.controller")
const upload = require("../utils/fileUpload")

const router = express.Router()

router.post("/addNewMotor", upload.single("motorCarPhoto"), addNewMotor)

router.get("/getAllMotors", getAllMotors)

module.exports = router