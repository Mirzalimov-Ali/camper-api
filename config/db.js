const mongoose = require("mongoose")
const connectDB = async () => {
    mongoose.set('strictQuery', false)
    const connecting = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connect on ${connecting}`.bgGreen)
}

module.exports = connectDB