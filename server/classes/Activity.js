const DatabaseManager = require('../database/DatabaseManager')

class Activity{
    //need to pass in all fields that go with an activity, this won't be constructed directly from db query
    constructor(activity_data_id, amount, units, start_time, duration, end_time,
        user_id, activity_detail_id, location_id, activity_name, short_description, long_description,
        fitness_type_id, fitness_name, fitness_description){
        this.activity_data_id = activity_data_id
        this.amount = amount
        this.units = units
        this.start_time = start_time
        this.duration = duration
        this.end_time = end_time
        this.user_id = user_id
        this.activity_detail_id = activity_detail_id
        this.location_id = location_id
        this.activity_name = activity_name
        this.short_description = short_description
        this.long_description = long_description
        this.fitness_type_id = fitness_type_id
        this.fitness_name = fitness_name
        this.fitness_description = fitness_description
    }

    //functions to update activity
    
    
    //delete activity
    delete(){
        //use self.id to delete this activity from the db
        //also update user to remove this activity

    }
}