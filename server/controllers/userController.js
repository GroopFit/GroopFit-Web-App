const User = require('../classes/User')
const DatabaseManager = require('../database/DatabaseManager')

const getAllUsers = (req, res) => { }

const getUser = async (req, res) => {
      let reqUserEmail = req.user
      
      //create User object with email
      const foundUser = new User(reqUserEmail)
      console.log(foundUser)
  
      if( Query.successful ){
          res.send({ email: foundUser.email, fullName: foundUser.given_name + ' '  + foundUser.family_name, pictureUrl: foundUser.picture_url })
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