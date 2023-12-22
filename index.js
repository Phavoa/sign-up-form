const password = document.querySelector("#password");
const comPassword = document.querySelector("#com-password");
const button = document.querySelector("#submitButton");
const inputs = document.querySelectorAll("input");
const phoneInput = document.querySelector("#phone");

button.addEventListener("click", function (event) {
  
  if (password.value !== comPassword.value) {
    const newErrorMessage = document.createElement("p");
    newErrorMessage.className = "errormessage";
    newErrorMessage.textContent = "*Passwords do not match";
    comPassword.parentElement.appendChild(newErrorMessage);

    event.preventDefault();
    password.style.border = "2px solid red";
    comPassword.style.border = "2px solid red";
    newErrorMessage.style.color = "red";
  }
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', function() {
    if (!inputs[i].checkValidity()) {
      inputs[i].style.border = '2px solid red';
    } else {
      inputs[i].style.border = '2px solid green';
    }
  });
}

phoneInput.addEventListener("input", function () {
  validatePhoneNumber();
});

function validatePhoneNumber() {
  const phoneNumber = phoneInput.value;
  const phoneNumberPattern = /^[+\d]+$/;

  if (phoneNumberPattern.test(phoneNumber)) {
    phoneInput.setCustomValidity("");
    phoneInput.style.border = '2px solid green';
  } else {
    phoneInput.setCustomValidity("Please enter a valid phone number");
    phoneInput.style.border = '2px solid red';
  }
}

