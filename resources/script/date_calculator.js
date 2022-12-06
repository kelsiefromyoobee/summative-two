function calculate_day_difference(first_date_value, second_date_value){
    let first_date = new Date(first_date_value);
    let second_date = new Date(second_date_value);
    // below function of .getTime() turns date into miliseconds (how many miliseconds passed since a specific date called Unix time)
    let date_difference_in_miliseconds = second_date.getTime() - first_date.getTime();
    // by dividing it with 1000 we get rid of 'mili' part of seconds
    // by dividing it with 3600 we convert seconds into hours (60 minutes in an hour, 60 seconds in a minute; therefore 3600 seconds in an hour)
    // by dividing it with 24 we convert it into days (24 hours in a day)
    // so if we combine all those; we divide it by 1000*3600*24 to convert into days
    let difference_in_days = date_difference_in_miliseconds / (1000*3600*24);
    // function now returns the number of days between two dates
    return difference_in_days;
}