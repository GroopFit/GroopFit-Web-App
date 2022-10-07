const DatabaseManager = require('../database/DatabaseManager')

const addToEmailList = async (req, res) => {
    let requestedSupporter = req.body
    /*const Query = await DatabaseManager.addToEmailList (
                                [reqUserEmail]
                            );*/

    //if( Query.successful ){
    //    const addedSupporter = Query.response[0]
    //    res.send({  })
    //} else { /*  Handle if a user was not found idk how this would happen though  */ }
    
    console.log("We are making progress boys almost in the email list")
    console.log( req.body )
    res.send({ value: "BOOM MESSAGE IS BACK BOYS" })
 }

 
module.exports = {
    addToEmailList,
}