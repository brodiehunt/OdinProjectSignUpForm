// Input Field Selectors
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirm');
const signUpForm = document.getElementById('sign-up-form');



// event Listeners
firstNameInput.addEventListener("focusout", nameInputValidate);
lastNameInput.addEventListener('focusout', nameInputValidate);
emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
passwordConfirmInput.addEventListener('focusout', validatePasswordConfirm);

function nameInputValidate(e) {
  let errorContainer = e.target.nextElementSibling;
  let inputVal = e.target.value;
  if (inputVal == '' || inputVal == null) {
    errorContainer.classList.remove('hidden')
    errorContainer.innerText = 'This feild is mandatory.';
    e.target.invalid = true;
  } else if (/^[a-zA-Z]+$/.test(inputVal) && inputVal.length > 1) {
    errorContainer.classList.add('hidden');
  } else {
    if (!/^[a-zA-Z]+$/.test(inputVal) && inputVal.length < 2) {
      errorContainer.classList.remove('hidden');
      errorContainer.innerText = 'Must contain only letters, Must be atleast two letters long'
    } else if (!/^[a-zA-Z]+$/.test(inputVal)) {
      errorContainer.classList.remove('hidden');
      errorContainer.innerText = 'Must contain only letters'
    } else {
      errorContainer.classList.remove('hidden');
      errorContainer.innerText = 'Must be atleast 2 letters'
    }
  }
}

function validateEmail(e) {
  let inputVal = e.target.value.trim();
  let errorContainer = e.target.nextElementSibling;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(inputVal)) {
    console.log('valid email');
    errorContainer.classList.add('hidden');
  } else {
    errorContainer.classList.remove('hidden');
    errorContainer.innerText = "Email must have valid format. (E.g: example@email.com)";
  }

}

function validatePassword(e) {
  let inputVal = e.target.value;
  let errorContainer = e.target.nextElementSibling;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

  if (passwordRegex.test(inputVal)) {
    console.log('valid password');
    errorContainer.classList.add('hidden');
  } else {
    errorContainer.classList.remove('hidden');
    errorContainer.innerText = 'Password must: Have 6 characters minimum, use at least 1 special character, include at least 1 number'
  }
}

function validatePasswordConfirm(e) {
  let inputVal = e.target.value;
  let errorContainer = e.target.nextElementSibling;

  if (inputVal === signUpForm.password.value) {
    console.log('passwords match');
    errorContainer.classList.add('hidden');
  } else {
    errorContainer.classList.remove('hidden');
    errorContainer.innerText = 'Passwords do not match';
  }

}
