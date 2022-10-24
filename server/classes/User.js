const DatabaseManager = require('../database/DatabaseManager')

class User{
    //need to pass in email so we can query for the right User
    constructor(email){
        const Query = DatabaseManager.SelectUserByEmail([email]);
        const foundUser = Query.response[0]
        //check for success first
        if (Query.successful) {
            this.userId = foundUser["userId"]
            this.email = foundUser["email"]
            this.givenName = foundUser["givenName"] 
            this.familyName = foundUser["familyName"]
            this.heightValue = foundUser["heightValue"]
            this.weightValue = foundUser["weightValue"]
            this.heightUnits = foundUser["heightUnits"]
            this.weightUnits = foundUser["weightUnits"]
            this.ageGroup = foundUser["ageGroup"]
            this.gender = foundUser["gender"]
            this.birthdate = foundUser["birthdate"]
            this.isOnline = foundUser["isOnline"]
            this.lastLogin = foundUser["lastLogin"]
            this.createDate = foundUser["createDate"]
            this.modifiedDate = foundUser["modifiedDate"]
            this.paymentTierId = foundUser["paymentTierId"]
            this.locationId = foundUser["locationId"]
            this.militaryDataId = foundUser["militaryDataId"]
            this.pictureUrl = foundUser["pictureUrl"]
            this.refreshToken = foundUser["refreshToken"]
        }
        //else return error
        console.log("error getting user from DB")
    }
      
        
    //setters
    setEmail(new_email){
        const Query = DatabaseManager.UpdateEmail([new_email, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setGivenName(new_name){
        const Query = DatabaseManager.UpdateGivenName([new_name, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setFamilyName(new_name){
        const Query = DatabaseManager.UpdateFamilyName([new_name, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setHeightValue(new_height){
        const Query = DatabaseManager.UpdateHeightValue([new_height, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setWeightValue(new_weight){
        const Query = DatabaseManager.UpdateWeightValue([new_weight, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setHeightUnits(new_height_units){
        const Query = DatabaseManager.UpdateHeightUnits([new_height_units, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setWeightUnits(new_weight_units){
        const Query = DatabaseManager.UpdateWeightUnits([new_weight_units, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setAgeGroup(new_age){
        const Query = DatabaseManager.UpdateAgeGroup([new_age, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setGender(new_gender){
        const Query = DatabaseManager.UpdateGender([new_gender, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setBirthdate(new_birthdate){
        const Query = DatabaseManager.UpdateBirthdate([new_birthdate, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setIsOnline(online){
        const Query = DatabaseManager.UpdateIsOnline([online, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setLastLogin(last_login){
        const Query = DatabaseManager.UpdateLastLogin([last_login, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setCreateDate(create_date){
        const Query = DatabaseManager.UpdatCreateDate([create_date, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setModifiedDate(modified_date){
        const Query = DatabaseManager.UpdateModifiedDate([modified_date, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setPaymentTierId(payment_tier_id){
        const Query = DatabaseManager.UpdatePaymentTierId([payment_tier_id, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setLocationId(location_id){
        const Query = DatabaseManager.UpdateLocationId([location_id, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setMilitaryDataId(military_data_id){
        const Query = DatabaseManager.UpdateMilitaryDataId([military_data_id, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

    setPictureUrl(picture_url){
        const Query = DatabaseManager.UpdatePictureUrl([picture_url, this.id]);
        if (Query.successful) {
            //return some sort of success
        } else {
           //return some sort of success 
        }
    }

}

module.exports = User();