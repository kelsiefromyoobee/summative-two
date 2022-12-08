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
if (user_input_for_people >= 1 /*min people for hotel*/ && user_input_for_people <= 2 && difference >= 1 && difference <= 5)
    document.getElementById('hotel').classList.remove('disabled')
else
    document.getElementById('hotel').classList.add('disabled')
    
// IF Hostel Statement
if (user_input_for_people ==1 && difference >= 1 && difference <= 10)
    document.getElementById('hostel').classList.remove('disabled')
else
    document.getElementById('hostel').classList.add('disabled')

// IF Motel
if (user_input_for_people >= 2 && user_input_for_people <= 4 && difference >= 3 && difference <=10)
    document.getElementById('motel').classList.remove('disabled')
else
    document.getElementById('motel').classList.add('disabled')

// If House
if (user_input_for_people >=1 && user_input_for_people <= 4 && difference >= 2 && difference <= 15)
    document.getElementById('house').classList.remove('disabled')
else
    document.getElementById('house').classList.add('disabled')
}

//TO DO
// add on click modal
// food database
//style the more info button

