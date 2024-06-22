const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const morgan = require("morgan")
const colors = require("colors")

// initial dotenv (.env)
dotenv.config()

// MongoDB connect
connectDB()

// App instance
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// development
if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}   

// Routes Auth
app.use("/v1/auth", require("./routes/user.routes"))

// Routes Motor
app.use("/v1/motor", require("./routes/motor.routes"))

// Routes Caravan
app.use("/v1/caravan", require("./routes/caravan.routes"))

// Routes Tuning
app.use("/v1/tuning", require("./routes/tuning.routes"))

// Routes Used Car
app.use("/v1/usedCar", require("./routes/usedCar.routes"))

// Routes Camping Place
app.use("/v1/campingPlace", require("./routes/campingPlace.routes"))

// Server create
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`.blue)
})