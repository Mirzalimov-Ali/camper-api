const {Router} = require("express")
const { register, login, me } = require("../controllers/user.controller")
const { protected } = require("../middleware/auth.middleware")
const upload = require("../utils/fileUpload")

const router = Router()

router.post("/register", upload.single("avatar"), register)

router.post("/login", login)

router.get("/me", protected, me)


module.exports = router