const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

exports.protected = async (req, res, next) => {
    // empty variable for user token
    let token;

    // Checking user token and checking a Token which starts with "Bearer" 
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        // push the second item of token to "token" variable (The "Bearer" is not saving to variable)
        token = req.headers.authorization.split(" ")[1];
    }

    // if user token is not defined
    if(!token){
        res.status(403).json({
            success: false,
            message: "Forbidden",
        });
    }

    // token checking and decode
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET)

    // if id as decoded is not defined
    if(!decoded.id){
        res.status(403).json({
            success: false,
            message: "Forbidden",
        });
    }

    // find user
    const user = await User.findById(decoded.id)

    if(!user){
        res.status(403).json({
            success: false,
            message: "Forbidden",
        });
    }
    
    req.body.user = user;

    next();
};