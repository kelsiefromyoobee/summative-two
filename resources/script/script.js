//hit search button = check number of guests, number of days

document.getElementById('search-btn').onclick = function(){
    document.getElementById('accommodation').classList.remove('no-display');


let user_input_for_people = document.getElementById('guest-input').value;

console.log( user_input_for_people );

let check_in_input = document.getElementById('check-in').value;
let check_out_input = document.getElementById('check-out').value

console.log( check_in_input );
console.log( check_out_input );

}