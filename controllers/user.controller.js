const User = require("../models/user.model")
const uuid = require('uuid')
const asyncHandler = require("../middleware/asyncHandler")
const ErrorResponse = require("../utils/errorResponse")


const register = async (req, res) => {
    try {
        const { name, email, password} = req.body
        
        console.log(req.file)

        const apiKey = uuid.v4()
        
        // bunaqa email borligini topadi
        const userExist = await User.findOne({ email })
        
        // bunaqa email bolsa
        if(userExist) {
            return res.status(409).json({success: false, msg: "User email already exists!"})
        }

        const user = await User.create({
            name,
            email,
            password, 
            apiKey,
            avatar: req.file ? "/uploads/users" + req.file.filename : "",
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

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    // Email
    const user = await User.findOne({ email })
    
    if(!user) {
        return next(new ErrorResponse("Invalid Credentials!", 404))
    }
    
    // Password
    const isMatch = await user.matchPassword(password)

    if(!isMatch) {
        return next(new ErrorResponse("Invalid Credentials!", 404))
    }
    
    // Token
    const token = user.generatedJwtToken()

    res.status(200).json({success: true, token})
})

const me = async (req, res) => {
    try {
        const { user } = req.body

        res.status(200).json({ success: true, data: user })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const uptade = asyncHandler(async (req, res, next) => {
    
})

module.exports = { register, login, me }