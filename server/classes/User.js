const DatabaseManager = require('../database/DatabaseManager')

class User{
    //fields
    

    //need to pass in email so we can query for the right User
    constructor(email){
        try{
            const Query = DatabaseManager.SelectUserByEmail([email]);
            const foundUser = Query.response[0]
            //fill in fields here
            this.id = 
            this.name = 
            this.dob = 
            this.groop = 
            this.age = 
        }
        catch(e){
            console.log(e)
            //return some type of error here
        }
        
    }

    //getters
    getName(){
        return this.name
    }
    //...

    //setters
    setName(){
        try {
            const Query = DatabaseManager.UpdateUserName([new_name, id]);
            const response = Query.response[0]
        } catch (error) {
            console.log(error)
        }
        if (response["successful"] == false) {
            //return some sort of error
        } else {
           //return some sort of success 
        }
    }


}