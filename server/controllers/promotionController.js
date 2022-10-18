const DatabaseManager = require('../database/DatabaseManager')

const addToEmailList = async (req, res) => {
    let reqSupporter = req.body
    let queryValues = [reqSupporter.email, reqSupporter.firstName, reqSupporter.lastName]
    console.log(queryValues)
    const Query = await DatabaseManager.InsertIntoMailingList(queryValues);
    console.log(Query)
    if( Query.successful ){
       const addedSupporter = Query.response[0]
       res.status(200).send({...addedSupporter, msg: `${reqSupporter.email} has been added to the mailing list.` })
    } else if ( Query.error.code === '23505' ){ 
        console.log("DHAJKDHJSKAHDK")
        res.status(409).send({ err: 409, msg: `${reqSupporter.email} already exists in the mailing list.`}) 
    } else {
        res.status(401).send({ err: 401, msg: "Unable to connect to the database at this time"}) 
    }
 }

 
module.exports = {
    addToEmailList,
}