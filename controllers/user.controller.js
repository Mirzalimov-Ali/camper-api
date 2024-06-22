const User = require("../models/user.model")
const uuid = require('uuid')

const register = async(req, res) => {
    try {
        const { name, email, password} = req.body
        
        const apiKey = uuid.v4()

        const userExist = await User.findOne({email})

        if(userExist) {
            return res.status(409).json({success: false, msg: "User email already exists!"})
        }

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

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if(!user) {
            return res.status(404).json({success: false, msg: "Invalid credentials!"})
        }

        const isMatch = await user.matchPassword(password)

        if(!isMatch) {
            return res.status(404).json({success: false, msg: "Invalid credentials!"})
        }

        res.status(200).json({success: true, data: user})
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = { register, login }