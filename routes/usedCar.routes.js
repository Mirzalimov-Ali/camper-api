const {Router} = require("express")
const { addNewUsedCar, getAllUsedCars } = require("../controllers/usedCar.controller")

const router = Router()

router.post("/addNewUsedCar", addNewUsedCar)

router.get("/getAllUsedCars", getAllUsedCars)

module.exports = router