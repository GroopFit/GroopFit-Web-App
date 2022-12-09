//TASK: Make a function that compares strings in all lowercase against each other stringComparison(str1, str2)
//TASK: Make a function to calculate time difference between dates in format HH:MM:SS:MM or DD:HH:MM:SS:MM if it is days long
//TASK: Make a function to Capitalize the First Letter of a String "dog" becomes "Dog"
//TASK: Make a function that Capitalizes the first letter in every word that occurs "dog cat" -> "Dog Cat"
//TASK: Make a function to Concatenate Jsons

stringComparison = (str1, str2) => {
    if(typeof(str1) !== 'string' || typeof(str2) !== 'string'){
        exit(-1);
    }
    return str1.toLowerCase() == str2.toLowerCase();
}

capString = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

capStrings = (str_array) => {
    let str_array_cop;
    str_array.split(" ");
    for (let i = 0; i < str_array.size(); i++) {
        str_array_cop += capString(str_array[i]);
    }
    return str_array_cop;
    
}


getActivityColor = (activityName, activityColors) => {
    return activityColors.find(element => element.activity === activityName).color;
}