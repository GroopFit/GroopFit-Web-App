//TASK: Make a function that compares strings in all lowercase against each other stringComparison(str1, str2)
//TASK: Make a function to calculate time difference between dates in format HH:MM:SS:MM or DD:HH:MM:SS:MM if it is days long
//TASK: Make a function to Capitalize the First Letter of a String "dog" becomes "Dog"
//TASK: Make a function that Capitalizes the first letter in every word that occurs "dog cat" -> "Dog Cat"
//TASK: Make a function to Concatenate Jsons




getActivityColor = (activityName, activityColors) => {
    return activityColors.find(element => element.activity === activityName).color;
}