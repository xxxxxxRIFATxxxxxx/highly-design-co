// For Change Image in Trusted Section
document.querySelector(".trusted").addEventListener("mouseover", () => {
    document.querySelector(".trusted-image").src = "images/trusted-blue.svg";
    document.querySelector(".trusted-text-1").style.color = "blue";
    document.querySelector(".trusted-text-2").style.color = "blue";
});

document.querySelector(".trusted").addEventListener("mouseout", () => {
    document.querySelector(".trusted-image").src = "images/trusted-silver.svg";
    document.querySelector(".trusted-text-1").style.color = "black";
    document.querySelector(".trusted-text-2").style.color = "black";
});


// For Change Image in Design Section
document.querySelector(".packaging").addEventListener("mouseover", () => {
    document.querySelector(".design-image").src = "images/design-blue.svg";
    document.querySelector(".design-text-1").style.color = "blue";
    document.querySelector(".design-text-2").style.color = "blue";
});

document.querySelector(".packaging").addEventListener("mouseout", () => {
    document.querySelector(".design-image").src = "images/design-black.svg";
    document.querySelector(".design-text-1").style.color = "black";
    document.querySelector(".design-text-2").style.color = "black";
});

