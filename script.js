

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const designation = document.getElementById('designation');
const phonenumber = document.getElementById('phonenumber');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');






// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Enail is not valid');
  }
}
//check phone number is valid
function checkPhonenumber(input) {
    const ph = /^\d{10}$/;
    if (ph.test(input.value.trim())) {
        showSuccess(input);
    }  else {
        showError(input, 'Phone number is not valid');
    }
}
//check zip code is valid
function checkZip(input) {
    const zc = /^\d{6}$/;
    if (zc.test(input.value.trim())) {
        showSuccess(input);
    }  else {
        showError(input, 'Zip code is not valid');
    }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}



// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([firstname, lastname, username, email, designation, address, city, state, zip]);
  checkLength(firstname, 4, 15);
  checkLength(lastname, 4, 15);
  checkLength(username, 3, 15);
  checkEmail(email);
  checkLength(designation, 5, 15);
  checkPhonenumber(phonenumber);
  checkLength(address, 10, 35);
  checkLength(city, 3, 15);
  checkLength(state, 3, 15);
  checkZip(zip);
  
});
//finalize
function showAlert() {
    var myText = "Do you like to Submit the form!";
    if (confirm(myText) == true){
        alert("Submitted Successfully");
    } else {

    }
}
//submit
/*$("#submitForm").click(function() {
    alert("The Form has been Submitted.");
 });*/
 





   



