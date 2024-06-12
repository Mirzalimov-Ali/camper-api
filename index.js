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


// Server create
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server is running on https://localhost:${PORT}`.blue)
})