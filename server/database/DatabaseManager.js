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
}

module.exports = new DatabaseManager()
