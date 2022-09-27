const DatabaseManager = require('../database/DatabaseManager')

const zeroPad = (num, places) => String(num).padStart(places, '0')



const getAllActivities = (req, res) => { }

const getActivity = (req, res) => { }

const createActivity = (req, res) => { 
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

    res.send({Message: "Message from the Backend :)"})
}

const deleteActivity = (req, res) => { }

const replaceActivity = (req, res) => { }

const updateActivity = (req, res) => { }

module.exports = {
    getAllActivities,
    getActivity,
    createActivity,
    deleteActivity,
    replaceActivity,
    updateActivity
}