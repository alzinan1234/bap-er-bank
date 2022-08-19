// step  1 click event submit buttton
document.getElementById('btn-submit').addEventListener('click', function(){
    // step : 2 get the email address.
    // always remember to use .value to get text from an input field.
    const emailField = document.getElementById('user-email');
    const email =  emailField.value;
    console.log(email);
    // step : 3 get password
    // set id on the html element
    // get the element 
    // get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // danger: do not email verify  email password 
    // step 4 
    if(email === 'zinan123@gmail.com' && password === 'baperbank'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui password vule gesos !!.toke ami teijjo sontan gosonan korlam.')
    }
})