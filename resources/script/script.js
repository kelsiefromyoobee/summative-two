//hit search button = check number of guests, number of days

let my_search_btn = $('#search-btn');
my_search_btn[0].onclick = function(){
    $('#accommodation')[0].classList.remove('no-display');


let user_input_for_people = $('#guest-input')[0].value;

console.log( user_input_for_people );

let check_in_input = $('#check-in')[0].value;
let check_out_input = $('#check-out')[0].value

// datecalculator.js
let difference = calculate_day_difference(check_in_input , check_out_input)
console.log(difference);

// IF Hotel Statement
if (user_input_for_people >= 1 /*min people for hotel*/ && user_input_for_people <= 2 && difference >= 1 && difference <= 5)
    $('#hotel')[0].classList.remove('disabled');
else
    $('#hotel')[0].classList.add('disabled');
    
// IF Hostel Statement
if (user_input_for_people ==1 && difference >= 1 && difference <= 10)
    $('#hostel')[0].classList.remove('disabled');
else
    $('#hostel')[0].classList.add('disabled');

// IF Motel
if (user_input_for_people >= 2 && user_input_for_people <= 4 && difference >= 3 && difference <=10)
    $('#motel')[0].classList.remove('disabled');
else
    $('#motel')[0].classList.add('disabled');

// If House
if (user_input_for_people >=1 && user_input_for_people <= 4 && difference >= 2 && difference <= 15)
    $('#house')[0].classList.remove('disabled');
else
    $('#house')[0].classList.add('disabled');
}

let more_info_btns = document.getElementsByClassName('more-info-btn')
for (i=0; i<more_info_btns.length; i++) 
    more_info_btns[i].onclick=function(){
        window.location= '../../other.html';
    }






