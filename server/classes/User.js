const DatabaseManager = require('../database/DatabaseManager');
const Activity = require('./Activity');

class User{
    //need to pass in email so we can query for the right User
     constructor(foundUser, Query){
        //hold a list of Activities, this user has done
        var activities = [];
        //hold list of groups this user is a part of
        var groops = [];
        //check for success first
        if (Query.successful == true) {
            this.userId = foundUser["user_id"]
            this.email = foundUser["email"]
            this.givenName = foundUser["given_name"] 
            this.familyName = foundUser["family_name"]
            this.heightValue = foundUser["height_value"]
            this.weightValue = foundUser["weight_value"]
            this.heightUnits = foundUser["height_units"]
            this.weightUnits = foundUser["weight_units"]
            this.ageGroup = foundUser["age_group"]
            this.gender = foundUser["gender"]
            this.birthdate = foundUser["birthdate"]
            this.isOnline = foundUser["is_online"]
            this.lastLogin = foundUser["last_login"]
            this.createDate = foundUser["create_date"]
            this.modifiedDate = foundUser["modified_date"]
            this.paymentTierId = foundUser["payment_tier_id"]
            this.locationId = foundUser["location_id"]
            this.militaryDataId = foundUser["military_data_id"]
            this.pictureUrl = foundUser["picture_url"]
            this.refreshToken = foundUser["refresh_token"]
        }
        else{
            //else return error
            console.log("error getting user from DB")
            return { successful: false, response: "User not found" } 
        }
    }

    static async fetchUser(email) {
        const Query = await DatabaseManager.SelectUserByEmail([email]);
        //if no rows returned from query, set founduser = null to avoid key error
        const foundUser = Query.response == null ? null:Query.response[0];
        // Invoke the private constructor
        return new User(foundUser, Query);
    }
      
        
    //setters

    /**
     * To set a new email for this User. 
     * @param {string} new_email 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setEmail(new_email){
        const Query = DatabaseManager.UpdateEmail([new_email, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
            return { successful: false, response: null, error: Query.error } 
        }
    }

    /**
     * To set a new first name for this User. 
     * @param {string} new_name 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setGivenName(new_name){
        const Query = DatabaseManager.UpdateGivenName([new_name, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new last name for this User. 
     * @param {string} new_name 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setFamilyName(new_name){
        const Query = DatabaseManager.UpdateFamilyName([new_name, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new height for this User. 
     * @param {float} new_height 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setHeightValue(new_height){
        const Query = DatabaseManager.UpdateHeightValue([new_height, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new weight for this User. 
     * @param {float} new_weight 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setWeightValue(new_weight){
        const Query = DatabaseManager.UpdateWeightValue([new_weight, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set new height units for this User. 
     * @param {string} new_height_units 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setHeightUnits(new_height_units){
        const Query = DatabaseManager.UpdateHeightUnits([new_height_units, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set new weight units for this User. 
     * @param {string} new_weight_units 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setWeightUnits(new_weight_units){
        const Query = DatabaseManager.UpdateWeightUnits([new_weight_units, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new age for this User. 
     * @param {int} new_age 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setAgeGroup(new_age){
        const Query = DatabaseManager.UpdateAgeGroup([new_age, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new gender for this User. 
     * @param {string} new_gender 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setGender(new_gender){
        const Query = DatabaseManager.UpdateGender([new_gender, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new birthdate for this User. 
     * @param {string} new_birthdate 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setBirthdate(new_birthdate){
        const Query = DatabaseManager.UpdateBirthdate([new_birthdate, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new online status for this User. 
     * @param {boolean} online 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setIsOnline(online){
        const Query = DatabaseManager.UpdateIsOnline([online, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To update the last login time for this User. 
     * @param {string} last_login 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setLastLogin(last_login){
        const Query = DatabaseManager.UpdateLastLogin([last_login, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To update the date created for this User. 
     * @param {string} create_date 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setCreateDate(create_date){
        const Query = DatabaseManager.UpdatCreateDate([create_date, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To update the date modified for this User.  
     * @param {string} modified_date 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setModifiedDate(modified_date){
        const Query = DatabaseManager.UpdateModifiedDate([modified_date, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new payment tier for this User. 
     * @param {int} payment_tier_id 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setPaymentTierId(payment_tier_id){
        const Query = DatabaseManager.UpdatePaymentTierId([payment_tier_id, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new location id for this User. 
     * @param {int} location_id 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setLocationId(location_id){
        const Query = DatabaseManager.UpdateLocationId([location_id, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new military id for this User. 
     * @param {string} military_data_id 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setMilitaryDataId(military_data_id){
        const Query = DatabaseManager.UpdateMilitaryDataId([military_data_id, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To set a new picture url for this User. 
     * @param {string} picture_url 
     * @returns {Object} either a success object or a failure object with the error.
     */
    setPictureUrl(picture_url){
        const Query = DatabaseManager.UpdatePictureUrl([picture_url, this.id]);
        if (Query.successful) {
            return { successful: true}
        } else {
           return { successful: false, response: null, error: Query.error }  
        }
    }

    /**
     * To add an activity for this User. 
     * @param {Activity} activity 
     * @returns {Object} either a success object or a failure object with the error.
     */
    addActivity(activity) {
        //make sure its an activity
        if( activity instanceof Activity ){
            //make sure it doesn't already exist
            index = self.activities.findIndex((x)=>x.activity_data_id = activity.activity_data_id)
           if (index==-1) {
               self.activities.push(activity)
           }
           return {successful: false, response: null, error: "Activity already exists for user"}
        }
        return {successful: false, response: null, error: "argument must be instance of activity class"}
        
    }

    /**
     * To remove an activity for this User. 
     * @param {Activity} activity 
     * @returns {Object} either a success object or a failure object with the error.
     */
     removeActivity(activity) {
        //make sure its an activity
        if( activity instanceof Activity ){
           //make sure it does exist
           index = self.activities.findIndex((x)=>x.activity_data_id = activity.activity_data_id)
           if (index!=-1) {
               self.activities.splice(index,1)
           }
           return {successful: false, response: null, error: "Activity does not exist for user"}
        }
        return {successful: false, response: null, error: "argument must be instance of activity class"}
        
    }

}

module.exports = User;