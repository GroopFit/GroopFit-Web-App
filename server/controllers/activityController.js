const DatabaseManager = require('../database/DatabaseManager')

const zeroPad = (num, places) => String(num).padStart(places, '0')



const getAllUserActivities = async (req, res) => {
    console.log("BOOM")
    let reqUserEmail = req.user
    const Query = await DatabaseManager.SelectAllUserActivities([reqUserEmail]);

    if( Query.successful ){
        res.send({ activities:  Query.response })
    } else { /*  Handle if a user was not found idk how this would happen though  */
        res.send({  })
    }
}

const getAllUsersActivities = (req, res) => { }



const createActivity = async (req, res) => { 
    let reqUserEmail = req.user
    let reqActivity = req.body
    console.log("------------------------> " , req.params)

    console.log("Create Activity: ", req.body) 

    var delta = Math.abs(new Date(req.body.endTime) - new Date(req.body.startTime)) / 1000;
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    // what's left is seconds
    var seconds = delta % 60;  
    
    let time = zeroPad(hours, 2) + ":" + zeroPad(minutes, 2) + ":" + zeroPad(seconds , 2)

    console.log(new Date(req.body.startTime), "-->", new Date(req.body.endTime))
    console.log("Time: " ,  zeroPad(hours, 2) + ":" + zeroPad(minutes, 2) + ":" + zeroPad(seconds , 2))

    let calc_duration = zeroPad(hours, 2) + ":" + zeroPad(minutes, 2) + ":" + zeroPad(seconds , 2)
    reqActivity = { ...reqActivity, duration: calc_duration }

    let values = [ reqActivity.amount, reqActivity.units, reqActivity.startTime, reqActivity.duration, reqActivity.endTime, 
                   parseInt(req.params.id), null, reqActivity.name, reqActivity.desc, reqActivity.desc, reqActivity.type ];

    const Query = await DatabaseManager.InsertUserActivity(values);

    if( Query.successful ){
        console.log("Now Activity is: ", Query.response[0]  )

        let savedActivity = {
            ...Query.response[0],
            activityName: reqActivity.name,
            fitnessName: reqActivity.type, 
            longDesc: reqActivity.desc,
            shortDesc: reqActivity.desc,
            duration: calc_duration, 
        }


        res.send({ activity: savedActivity })
    } else { /*  Handle if a user was not found idk how this would happen though  */
        res.send({  })
    }
}

const deleteActivity = (req, res) => { }

const replaceActivity = (req, res) => { }

const updateActivity = (req, res) => { }

module.exports = {
    getAllUserActivities,
    getAllUsersActivities,
    createActivity,
    deleteActivity,
    replaceActivity,
    updateActivity
}