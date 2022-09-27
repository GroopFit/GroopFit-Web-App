const jwt = require('jsonwebtoken');
//const DatabaseManager = require('./database/DatabaseManager')
require('dotenv').config({path: '../.env'});


///////////////////////////////////////////////////////////////////
// Task: Make this verify that the user is found in the database //
///////////////////////////////////////////////////////////////////
const verifyJWT = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);
    
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded.email;
            next();
        }
    );
}

module.exports = verifyJWT