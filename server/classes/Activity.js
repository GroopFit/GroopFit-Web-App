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

    /**
     * To update 1 or more fields for an activity. 
     * for every field that is going to be updated there needs to be a key and value in the input object
     * @param {Object} keys are the fields, values are the actual values. this only contains fields that will be updated
     * @returns {Object} either a success object or a failure object with the error.
     */
     updateActivity(values){
        all_fields = [activity_data_id, amount, units, start_time, duration, end_time,
            user_id, activity_detail_id, location_id, activity_name, short_description, long_description,
            fitness_type_id, fitness_name, fitness_description]
        //create new array with all required values for an activity
        var new_values = []
        for (var field in all_fields) {
            if (values.field) {
                new_values.append(values.field)
            }
            else {
                new_values.append(this.field)
            }
        }

        const Query = DatabaseManager.updateActivity(new_values);
        if (Query.successful) {
            return { successful: true}
        } else {
            return { successful: false, response: null, error: Query.error } 
        }
    }
    
    /**
     * To delete an activity and remove it from a user. 
     * @returns {Object} either a success object or a failure object with the error.
     */
    delete(){
        //use self.id to delete this activity from the db
        //also update user to remove this activity
        const Query = DatabaseManager.deleteActivity(self.activity_data_id);
        if (Query.successful) {
            return { successful: true}
        } else {
            return { successful: false, response: null, error: Query.error } 
        }
    }
}

module.exports = Activity;