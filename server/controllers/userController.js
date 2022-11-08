const User = require('../classes/User')
const DatabaseManager = require('../database/DatabaseManager')

const getAllUsers = (req, res) => { }

const getUser = async (req, res) => {
    let reqUserEmail = req.user
    console.log("HELLLOOOOOO")
    console.log(reqUserEmail)
    //create User object with email
    const foundUser = await User.fetchUser(reqUserEmail)
    console.log("FOUND USER", foundUser)

    if( foundUser instanceof User ){
        res.send({ 
            email: foundUser.email,
            fullName: foundUser.givenName + ' '  + foundUser.familyName,
            pictureUrl: foundUser.pictureUrl
        })
    } else { /*  Handle if a user was not found idk how this would happen though  */ }
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