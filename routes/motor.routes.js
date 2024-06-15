const express = require("express")
const { addNewMotor, getAllMotors } = require("../controllers/motor.controller")

const router = express.Router()

router.post("/addNewMotor", addNewMotor)

router.get("/getAllMotors", getAllMotors)

module.exports = router