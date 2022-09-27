const DatabaseManager = require('../database/DatabaseManager')
require('dotenv').config({path: '../.env'});
const path = require('path');
var decodeJWT = require('jwt-decode')
const jwt = require('jsonwebtoken'); 

const handleLoginGoogle = async (req, res) => {
    if( !req.body.token ){ return res.status(400).json({'message': "A token is required to log in"}) }

    const encodedJWT = req.body.token
    const decodedJWT = decodeJWT(encodedJWT)

    if( !decodedJWT['email_verified'] ){ return res.status(400).json({'message': "Email must be verified"}) }


    const reqUser = {
        email: decodedJWT['email'],
        name: decodedJWT['name'],
        givenName: decodedJWT['given_name'], 
        familyName: decodedJWT['family_name'], 
        picture: decodedJWT['picture'],
    }

    const Query = await DatabaseManager.SelectUserByEmail([reqUser.email]);

    if( Query.successful ){
        let queryResp = Query.response
        const USER_ID = queryResp[0].user_id

        if(queryResp[0].email === reqUser.email){
            const accessToken = jwt.sign(
                { email: reqUser.email, },
                process.env.ACCESS_TOKEN_SECRET, 
                { expiresIn: '10s' }  //make 5m 10m 15m 20m
            )

            const refreshToken = jwt.sign(
                { email: reqUser.email },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' } 
            )
            //console.log('USER: ', USER_ID)
            const Query2 = await DatabaseManager.UpdateAuthenticationValuesByEmail([reqUser.email, refreshToken, reqUser.picture]);
            if( Query2.successful ){
                res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
                res.send({ accessToken: accessToken, userId : USER_ID  })
            } else {
                res.send({message: "Failed to give user token"}) 
            }
        } else {
            res.send({message: "email not the same"}) 
        }
    } else { 
        res.send({message: "Needs to be signed up (ask questions)"}) 
    }
}

module.exports = { handleLoginGoogle };