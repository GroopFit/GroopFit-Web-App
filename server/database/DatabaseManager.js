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

    /**
     * To select all fields about a User from the DB by searching with their email
     * @param {Array} Values
     *  @param {string} Values[0] = email you are using to search
     * @returns {Object} either a success object with the User or a failure object with the error.
     */
    async SelectUserByEmail( Values ){
        try {
            const res = await this.DatabaseClient.query(`Select * FROM "users" WHERE email = $1`, Values)
            return { successful: true, response: res.rows }        
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }

    /**
     * To select all fields about a User from the DB by searching with their Refresh Token
     * @param {Array} Values
     *  @param {string} Values[0] = Refresh Token you are using to search
     * @returns {Object} either a success object with the User or a failure object with the error.
     */
    async SelectUserByRefreshToken( Values ){
        try {
            const res = await this.DatabaseClient.query(`Select * FROM "users" WHERE refresh_token = $1`, Values)
            return { successful: true, response: res.rows }        
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }

    /**
     * To update a Users refresh token and picture URL by searching by email
     * @param {Array} Values
     *  @param {string} Values[0] = Email you are using to find the User
     *  @param {string} Values[1] = New refresh token you are looking to set
     *  @param {string} Values[2] = New picture url you are looking to set
     * @returns {Object} either a success object with the response or a failure object with the error.
     */
    async UpdateAuthenticationValuesByEmail( Values ){
        try {
            const res = await this.DatabaseClient.query(`UPDATE "users" SET refresh_token = $2, picture_url = $3 WHERE email = $1 RETURNING *; `, Values)
            return { successful: true, response: res.rows }        
        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }

    /**
     * To add someone to the mailing list 
     * @param {Array} Values
     *  @param {string} Values[0] = Email you are adding to the list
     *  @param {string} Values[1] = First name of person being added
     *  @param {string} Values[2] = Last name of person being added
     * @returns {Object} either a success object with the response or a failure object with the error.
     */
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

    /**
     * To select all activities associated with a given user 
     * @param {Array} Values
     *  @param {string} Values[0] = email of user you are looking to select
     * @returns {Object} either a success object with the all activities associated with that user or a failure object with the error.
     */
    async SelectAllUserActivities( Values ){
        try{
            const res = await this.DatabaseClient.query(
               `SELECT
                    a_data.activity_data_id as "activityId", a_data.amount, a_data.units, a_data.start_time as "startTime", a_data.duration, 
                    a_data.end_time as "endTime", a_data.create_date as "createDate", a_detail.activity_name as "activityName",
                    a_detail.short_description as "shortDesc",  a_detail.long_description as "longDesc", f_type.fitness_name as "fitnessName", 
                    f_type.fitness_description as "fitnessDesc"
                FROM 
                    activity_data a_data JOIN activity_detail a_detail
                        ON a_data.activity_detail_id = a_detail.activity_detail_id
                    JOIN fitness_type f_type ON f_type.fitness_type_id = a_detail.fitness_type_id
                WHERE
                    a_data.user_id = (SELECT u.user_id FROM "users" u WHERE u.email = $1)`, 
            Values)
            return { successful: true, response: res.rows }    

        } catch (err) {
            return { successful: false, response: null, error: err }
        }
    }

    /*
amount, units, start_time, duration, end_time, create_date, modified_date, user_id, location_id, activity_detail_id
1           2           3         4     5           6           7               8       9           __ 
activity_detail_id, activity_name, short_description, long_description, create_date, modified_date, fitness_type_id
__                      10              11                  12              13             14           

    */
   /**
     * To add an Activty for a given user 
     * @param {Array} Values, associated indeces seen above
     * @returns {Object} either a success object with the Activity added or a failure object with the error.
     */
    async InsertUserActivity( Values ){
        try{

            //TASK: MAKE THIS WORK AS A TRANSACTION!!!!!
            const res = await this.DatabaseClient.query(
               `
                WITH return_relation AS (
                    INSERT INTO activity_detail(activity_detail_id, activity_name, short_description, long_description, create_date, modified_date, fitness_type_id ) 
                        VALUES ( DEFAULT, $8, $9, $10, DEFAULT, DEFAULT, ( SELECT fitness_type_id FROM fitness_type f WHERE f.fitness_name = $11)) RETURNING activity_detail_id
                )
                INSERT INTO activity_data(activity_data_id, amount, units, start_time, duration, end_time, create_date, modified_date, user_id, location_id, activity_detail_id)
                    VALUES ( DEFAULT, $1, $2, $3, $4, $5, DEFAULT, DEFAULT, $6, $7, (SELECT activity_detail_id FROM return_relation))
                RETURNING activity_data_id as "activityId", amount, units, start_time as "startTime", duration, end_time as "endTime", create_date as "createDate"
                `, 
            Values)
            return { successful: true, response: res.rows }    

        } catch (err) {
            console.error('Error with Query', err)
            return { successful: false, response: null, error: err }  
        }
    }
}

module.exports = new DatabaseManager()
