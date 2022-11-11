const User = require('../classes/User')
const DatabaseManager = require('../database/DatabaseManager')
const constants = require('../constants/responses')

const getAllUsers = (req, res) => { }

const getUser = async (req, res) => {
    let reqUserEmail = req.user
    //create User object with email, need to use static function that calls private constructor itself
    const foundUser = await User.fetchUser(reqUserEmail)
    if( foundUser instanceof User ){
        res.send({ 
            email: foundUser.email,
            fullName: foundUser.givenName + ' '  + foundUser.familyName,
            pictureUrl: foundUser.pictureUrl
        })
    } else { res.send(constants.ERROR_RESPONSE_NOT_FOUND) }
}

const createUser = (req, res) => { }

const deleteUser = (req, res) => { }

const replaceUser = (req, res) => { }

const updateUser = (req, res) => { }

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    replaceUser,
    updateUser
}