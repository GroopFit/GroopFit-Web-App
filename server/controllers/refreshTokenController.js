const DatabaseManager = require('../database/DatabaseManager')
require('dotenv').config({path: '../.env'});
const path = require('path');
var decodeJWT = require('jwt-decode')
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;
    const Query = await DatabaseManager.SelectUserByRefreshToken([refreshToken]);
    if ( !Query.successful ) return res.sendStatus(403); //Forbidden 

    let foundUser = Query.response[0]

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.email !== decoded.email) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "email": decoded.email },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            res.json({ accessToken })
        }
    );
}

module.exports = { handleRefreshToken }