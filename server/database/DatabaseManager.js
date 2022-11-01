const { Client } = require('pg')
//const _Functions = require('../_Functions')
//const DB_Queries = require('./SQL/DML/SelectQueries')

//could make this class have a current Query then make it run said query would save up lines of code

class DatabaseManager {
    constructor(){
        let localCredentials = {
            host:  process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            port: process.env.DATABASE_PORT,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_NAME,
        }
        let productionCredentials = {
            connectionString: process.env.DATABASE_URL,
            ssl: {
              rejectUnauthorized: false
            }
        }
         
        this.DatabaseClient = process.env.DATABASE_URL ? 
            new Client( productionCredentials ) :  new Client( localCredentials ) 
        
        this.DatabaseClient.connect().then(() => {
            if(process.env.DATABASE_URL){
                console.log('- Production Database Connection is Set')
            } else {  console.log('- Local Database Connection is Set') }
        }).catch(err => console.error('Database Connection Error', err.stack))
    }

    async SelectUserByEmail( Values ){
        try {
            const res = await this.DatabaseClient.query(`Select * FROM "users" WHERE email = $1`, Values)
            return { successful: true, response: res.rows }        
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }

    async SelectUserByRefreshToken( Values ){
        try {
            const res = await this.DatabaseClient.query(`Select * FROM "users" WHERE refresh_token = $1`, Values)
            return { successful: true, response: res.rows }        
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }

    async UpdateAuthenticationValuesByEmail( Values ){
        try {
            const res = await this.DatabaseClient.query(`UPDATE "users" SET refresh_token = $2, picture_url = $3 WHERE email = $1 RETURNING *; `, Values)
            return { successful: true, response: res.rows }        
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }

    async InsertIntoMailingList( Values ){
        try {
            const res = await this.DatabaseClient.query(
                `INSERT INTO mailing_list(email, given_name, family_name) 
                    VALUES ($1, INITCAP($2), INITCAP($3)) RETURNING * ;`, Values)
            return { successful: true, response: res.rows }        
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }

    //db functions for updating DB fields
     /**
     * To update a Users email
     * @param {Array} Values
     *  @param {string} Values[0] = New email you are using to set
     *  @param {integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateEmail( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set email = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users first name
     * @param {Array} Values
     *  @param {string} Values[0] = New name you are using to set
     *  @param {integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateGivenName( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set givenName = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users last name
     * @param {Array} Values
     *  @param {string} Values[0] = New name you are using to set
     *  @param {integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateFamilyName( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set familyName = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users height
     * @param {Array} Values
     *  @param {Float} Values[0] = New height you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateHeightValue( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set heightValue = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users weight
     * @param {Array} Values
     *  @param {Float} Values[0] = New weight you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateWeightValue( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set weightValue = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users height units
     * @param {Array} Values
     *  @param {String} Values[0] = New height unit you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateHeightUnits( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set heightUnits = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users weight units
     * @param {Array} Values
     *  @param {String} Values[0] = New weight unit you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateWeightUnits( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set weightUnits = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users age
     * @param {Array} Values
     *  @param {Integer} Values[0] = New age you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateAgeGroup( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set ageGroup = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users gender
     * @param {Array} Values
     *  @param {Integer} Values[0] = New gender you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateGender( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set gender = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users Birthdate
     * @param {Array} Values
     *  @param {String} Values[0] = New birthdate you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateBirthdate( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set birthdate = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users online status
     * @param {Array} Values
     *  @param {String} Values[0] = New status you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateIsOnline( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set isOnline = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users last login time
     * @param {Array} Values
     *  @param {String} Values[0] = New time are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateLastLogin( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set lastLogin = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users created date
     *  @param {String} Values[0] = New date you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateCreateDate( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set createDate = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users modified date
     * @param {Array} Values
     *  @param {String} Values[0] = New date you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateModifiedDate( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set modifiedDate = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users payment tier id
     * @param {Array} Values
     *  @param {Integer} Values[0] = New tier id you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdatePaymentTierId( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set paymentTierId = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users location id
     * @param {Array} Values
     *  @param {Integer} Values[0] = New location id you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateLocationId( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set locationId = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users military data id
     * @param {Array} Values
     *  @param {Integer} Values[0] = New military id you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdateMilitaryDataId( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set militaryDataId = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }

    /**
     * To update a Users picture url
     * @param {Array} Values
     *  @param {String} Values[0] = New url you are using to set
     *  @param {Integer} Values[1] = id of User you are looking for
     * @returns {Object} either a success object or a failure object with the error.
     */
    async UpdatePictureUrl( Values ) {
        try {
            const res = await this.DatabaseClient.query(
                `UPDATE "users" set pictureUrl = $1 where id = $2;`, Values
            )
            return { successful: true}  
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }
        }
    }
    //end of DB functions to update Users
}

module.exports = new DatabaseManager()
