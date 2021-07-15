// Common Function For Form
const handleForm = (step1, step2, location1, location2) => {
    let stepOne = document.querySelector(step1);
    let stepTwo = document.querySelector(step2);
    let locationOne = document.querySelector(location1);
    let locationTwo = document.querySelector(location2);

    stepOne.style.display = "none";
    stepTwo.style.display = "block";
    locationOne.style.display = "none";
    locationTwo.style.display = "block";
};

// For Form One
document.getElementById("handle-form-1").addEventListener("click", () => {
    handleForm(".step-one", ".step-two", ".location-one", ".location-two");
});

// For Form Two
document.getElementById("handle-form-2").addEventListener("click", () => {
    handleForm(".step-two", ".step-three", ".location-two", ".location-three");
});

// For Form Three
document.getElementById("handle-form-3").addEventListener("click", () => {
    handleForm(".step-three", ".step-four", ".location-three", ".location-four");
});

// For Edit Button

// Email Edit
document.getElementById("email-edit").addEventListener("click", () => {
    handleForm(".step-four", ".step-one", ".location-four", ".location-one");
});

// Project About Edit
document.getElementById("project-about-edit").addEventListener("click", () => {
    handleForm(".step-four", ".step-two", ".location-four", ".location-two");
});

// Project Time Edit
document.getElementById("project-time-edit").addEventListener("click", () => {
    handleForm(".step-four", ".step-three", ".location-four", ".location-three");
});

// Common Function For Blue Button Border Active
const handleBlueButtonBorder = (allButtons) => {
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("blue-button-border");
            current[0].className = current[0].className.replace(" blue-button-border", "");
            this.className += " blue-button-border";
        });
    };
};

// For Blue Button Border Active
const btnContainer = document.querySelector(".normal-button-div");
const btns = btnContainer.getElementsByClassName("btn");
handleBlueButtonBorder(btns);

const btnContainerStep3 = document.querySelector(".normal-button-div-step-3");
const btnsStep3 = btnContainerStep3.getElementsByClassName("btn");
handleBlueButtonBorder(btnsStep3);

// For Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// For Edit Button
const allEditBtn = document.querySelectorAll(".edit-btn");

for (i = 0; i < allEditBtn.length; i++) {
    allEditBtn[i].addEventListener("click", (event) => {
        event.preventDefault();
        event.target.previousSibling.previousSibling.disabled = false;
        event.target.previousSibling.previousSibling.autofocus;
    });
}