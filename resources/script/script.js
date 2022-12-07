//hit search button = check number of guests, number of days

document.getElementById('search-btn').onclick = function(){
    document.getElementById('accommodation').classList.remove('no-display');


let user_input_for_people = document.getElementById('guest-input').value;

console.log( user_input_for_people );

let check_in_input = document.getElementById('check-in').value;
let check_out_input = document.getElementById('check-out').value

// datecalculator.js
let difference = calculate_day_difference(check_in_input , check_out_input)
console.log(difference);

// IF Hotel Statement

if (user_input_for_people >=2 && difference >=5)
    document.getElementsByClassName('hotel').classList.remove('disabled')
    else
    document.getElementsByClassName('hotel').classList.add('disabled')
    console.log(true);
}