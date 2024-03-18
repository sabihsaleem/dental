import {
    Aboutdata
}
    from './data.js'
const About = document.getElementById("About");
Aboutdata.forEach((data) => {
    const AboutDiv = document.createElement("div");
    AboutDiv.id = data.id;
    AboutDiv.classList.add("theme-treatment-About", "px-3", "py-2");
    AboutDiv.innerHTML = `
    <h4 class="text-black">${data.title}</h4>
    <ul>
        <li>${data.subtitle}</li>
        <li>#${data.montime}</li>
        <li>${data.fritime}</li>
        <li>${data.number}</li>
    </ul>
        `;
    About.appendChild(AboutDiv);
});

document.addEventListener("DOMContentLoaded", function () {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("SurName");
    var birthdayInput = document.getElementById("birthday");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("SurNameError");
    var birthdayError = document.getElementById("birthdayError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var firstNameClicked = false;
    var lastNameClicked = false;
    var birthdayClicked = false;
    var emailClicked = false;
    var phoneClicked = false;

    firstNameInput.addEventListener("blur", function () {
        firstNameClicked = true;
        validateFirstName();
    });

    lastNameInput.addEventListener("blur", function () {
        lastNameClicked = true;
        validateLastName();
    });

    birthdayInput.addEventListener("blur", function () {
        birthdayClicked = true;
        validateBirthday();
    });

    emailInput.addEventListener("blur", function () {
        emailClicked = true;
        validateEmail();
    });

    phoneInput.addEventListener("blur", function () {
        phoneClicked = true;
        validatePhone();
    });

    function validateFirstName() {
        if (firstNameInput.value.trim() === "" && firstNameClicked) {
            var errorMessageDiv = document.createElement("div");
            errorMessageDiv.classList.add("rounded", "px-1")
            errorMessageDiv.textContent = "Mandatory fields";
            errorMessageDiv.classList.add("error-message");
            errorMessageDiv.style.border = "1px solid red";
            errorMessageDiv.style.color = "red";
            errorMessageDiv.style.margin = "5px 0px 0px 0px";
            errorMessageDiv.style.transition = "border-color 0.3s ease";
            while (firstNameError.firstChild) {
                firstNameError.removeChild(firstNameError.firstChild);
            }
            firstNameError.appendChild(errorMessageDiv);
        } else {
            firstNameError.textContent = "";
        }
    }

    function validateLastName() {
        if (lastNameInput.value.trim() === "" && lastNameClicked) {
            var errorMessageDiv = document.createElement("div");
            errorMessageDiv.classList.add("rounded", "px-1")
            errorMessageDiv.textContent = "Mandatory fields";
            errorMessageDiv.classList.add("error-message");
            errorMessageDiv.style.border = "1px solid red";
            errorMessageDiv.style.color = "red";
            errorMessageDiv.style.margin = "5px 0px 0px 0px";
            errorMessageDiv.style.transition = "border-color 0.3s ease";
            while (lastNameError.firstChild) {
                lastNameError.removeChild(lastNameError.firstChild);
            }
            lastNameError.appendChild(errorMessageDiv);
        } else {
            lastNameError.textContent = "";
        }
    }

    function validateBirthday() {
        if (birthdayInput.value.trim() === "" && birthdayClicked) {
            var errorMessageDiv = document.createElement("div");
            errorMessageDiv.classList.add("rounded", "px-1")
            errorMessageDiv.textContent = "Mandatory fields";
            errorMessageDiv.classList.add("error-message");
            errorMessageDiv.style.border = "1px solid red";
            errorMessageDiv.style.color = "red";
            errorMessageDiv.style.margin = "5px 0px 0px 0px";
            errorMessageDiv.style.transition = "border-color 0.3s ease";
            while (birthdayError.firstChild) {
                birthdayError.removeChild(birthdayError.firstChild);
            }
            birthdayError.appendChild(errorMessageDiv);
        } else {
            birthdayError.textContent = "";
        }
    }

    function validateEmail() {
        if (emailInput.value.trim() === "" && emailClicked) {
            var errorMessageDiv = document.createElement("div");
            errorMessageDiv.classList.add("rounded", "px-1")
            errorMessageDiv.textContent = "Mandatory fields";
            errorMessageDiv.classList.add("error-message");
            errorMessageDiv.style.border = "1px solid red";
            errorMessageDiv.style.color = "red";
            errorMessageDiv.style.margin = "5px 0px 0px 0px";
            errorMessageDiv.style.transition = "border-color 0.3s ease";
            while (emailError.firstChild) {
                emailError.removeChild(emailError.firstChild);
            }
            emailError.appendChild(errorMessageDiv);
        } else {
            emailError.textContent = "";
        }
    }
    function validatePhone() {
        if (phoneInput.value.trim() === "" && phoneClicked) {
            var errorMessageDiv = document.createElement("div");
            errorMessageDiv.classList.add("rounded", "px-1")
            errorMessageDiv.textContent = "Mandatory fields";
            errorMessageDiv.classList.add("error-message");
            errorMessageDiv.style.border = "1px solid red";
            errorMessageDiv.style.color = "red";
            errorMessageDiv.style.margin = "5px 0px 0px 0px";
            errorMessageDiv.style.transition = "border-color 0.3s ease";
            while (phoneError.firstChild) {
                phoneError.removeChild(phoneError.firstChild);
            }
            phoneError.appendChild(errorMessageDiv);
        } else {
            phoneError.textContent = "";
        }
    }
    const moveBtn = document.querySelector(".next")
    if (firstNameInput.value !==null && lastNameInput.value !==null) {
        moveBtn.classList.remove("active")
        
    }else{
        
        moveBtn.classList.add("active")
    }
});