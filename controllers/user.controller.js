const User = require("../models/user.model")
const uuid = require('uuid')

const register = async(req, res) => {
    try {
        const { name, email, password} = req.body
        
        const apiKey = uuid.v4()

        const user = await User.create({
            name,
            email,
            password, 
            apiKey,
        })

        res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}