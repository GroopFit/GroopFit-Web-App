//TASK: Make a function that compares strings in all lowercase against each other stringComparison(str1, str2)
//TASK: Make a function to calculate time difference between dates in format HH:MM:SS:MM or DD:HH:MM:SS:MM if it is days long
//TASK: Make a function to Capitalize the First Letter of a String
//

/**
 * Gets color of activity with name matching 'activityName'.  
 * @param {string} activityName name of activity
 * @param {object} activityColors 
 * @return {string} the amount of health hero has after attack
*/
getActivityColor = (activityName, activityColors) => {
    return activityColors.find(element => element.activity === activityName).color;
}

/**
 * Compares two strings in all lowercase.
 * @param {string} str1 string 1
 * @param {string} str2 string 2
 * @return {boolean} whether strings are equal
*/
stringComparison = (str1, str2) => {
    return (str1.toLowerCase === str2.toLowerCase);
}

/**
 * Capitalizes first letter of string 's'.  
 * @param {string} s input string
 * @return {string} capitalized string 's'
*/
capitalizeFirstLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Returns time difference between two timestamps.  
 * @param {string} d1 first timestamp
 * @param {string} d2 second timestamp
 * @return {string} time difference between d2 and d1
*/
function getTimeDiff(d1, d2) {
    let d1Seconds = dateToSeconds(d1); 
    let d2Seconds = dateToSeconds(d2);

    let diff = ((d1Seconds - d2Seconds) < 0 ? (d2Seconds - d1Seconds) : (d1Seconds - d2Seconds));
    return (secondsToDate(diff));
}

/**
 * Converts timestamp to seconds value.  
 * @param {string} s represents date/time 
 * @return {number} date in seconds
*/
function dateToSeconds(s) {
    let t = s[0] * 60 * 60 + s[1] * 60 + s[2];

    let splitStr = s.split(':');

    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = parseInt(splitStr[i], 10);
    }

    let seconds = splitStr[0] * 60 * 60 + splitStr[1] * 60 + splitStr[2];

    return seconds;
}

/**
 * Converts seconds to timestamp string.  
 * @param {number} seconds timestamp in seconds
 * @return {string} timestamp corresponding to seconds
*/
function secondsToDate(seconds) {
    let hours = Math.floor(seconds/3600);
    let hh = hours < 10 ? "0" + (hours).toString() : (hours).toString();

    let min = Math.floor((seconds % 3600)/60);
    let mm = min < 10 ? "0" + (min).toString() : (min).toString();

    let sec = ((seconds % 3600) % 60);
    let ss = sec < 10 ? "0" + (sec).toString() : (sec).toString();

    let timeDiff = dd + ":" + hh + ":" + mm + ":" + ss;
    return timeDiff;
}