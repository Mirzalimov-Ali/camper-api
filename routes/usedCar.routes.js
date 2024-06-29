const {Router} = require("express")
const { addNewUsedCar, getAllUsedCars } = require("../controllers/usedCar.controller")
const upload = require("../utils/fileUpload")

const router = Router()

router.post("/addNewUsedCar", upload.single("usedCarPhoto"), addNewUsedCar)

router.get("/getAllUsedCars", getAllUsedCars)

module.exports = router