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


// For Change Image in Brand Logo

// Define All Brand Image
const brand1 = document.getElementById("brand-1");
const brand2 = document.getElementById("brand-2");
const brand3 = document.getElementById("brand-3");
const brand4 = document.getElementById("brand-4");
const brand5 = document.getElementById("brand-5");
const brand6 = document.getElementById("brand-6");
const brand7 = document.getElementById("brand-7");
const brand8 = document.getElementById("brand-8");
const brand9 = document.getElementById("brand-9");
const brand10 = document.getElementById("brand-10");
const brand11 = document.getElementById("brand-11");

// Define All Black Image Source
const blackImagebrand1 = "images/brands-logo-black/vance.svg";
const blackImagebrand2 = "images/brands-logo-black/devi.svg";
const blackImagebrand3 = "images/brands-logo-black/liv.svg";
const blackImagebrand4 = "images/brands-logo-black/otb.svg";
const blackImagebrand5 = "images/brands-logo-black/solis.svg";
const blackImagebrand6 = "images/brands-logo-black/viola.svg";
const blackImagebrand7 = "images/brands-logo-black/boxes.svg";
const blackImagebrand8 = "images/brands-logo-black/blomed.svg";
const blackImagebrand9 = "images/brands-logo-black/ambient.svg";
const blackImagebrand10 = "images/brands-logo-black/cluck.svg";
const blackImagebrand11 = "images/brands-logo-black/ho.svg";

// Define All Silver Image Source
const silverImagebrand1 = "images/brands-logo/vance.svg";
const silverImagebrand2 = "images/brands-logo/devi.svg";
const silverImagebrand3 = "images/brands-logo/liv.svg";
const silverImagebrand4 = "images/brands-logo/otb.svg";
const silverImagebrand5 = "images/brands-logo/solis.svg";
const silverImagebrand6 = "images/brands-logo/viola.svg";
const silverImagebrand7 = "images/brands-logo/boxes.svg";
const silverImagebrand8 = "images/brands-logo/blomed.svg";
const silverImagebrand9 = "images/brands-logo/ambient.svg";
const silverImagebrand10 = "images/brands-logo/cluck.svg";
const silverImagebrand11 = "images/brands-logo/ho.svg";

// Common Function For Change Brand Image
const changeBrandImage = (element, imageSilver, imageBlack) => {
    element.addEventListener("mouseover", () => {
        element.src = imageBlack;
    });

    element.addEventListener("mouseout", () => {
        element.src = imageSilver;
    });
};

// Function Call For Change Brand Image
changeBrandImage(brand1, silverImagebrand1, blackImagebrand1);
changeBrandImage(brand2, silverImagebrand2, blackImagebrand2);
changeBrandImage(brand3, silverImagebrand3, blackImagebrand3);
changeBrandImage(brand4, silverImagebrand4, blackImagebrand4);
changeBrandImage(brand5, silverImagebrand5, blackImagebrand5);
changeBrandImage(brand6, silverImagebrand6, blackImagebrand6);
changeBrandImage(brand7, silverImagebrand7, blackImagebrand7);
changeBrandImage(brand8, silverImagebrand8, blackImagebrand8);
changeBrandImage(brand9, silverImagebrand9, blackImagebrand9);
changeBrandImage(brand10, silverImagebrand10, blackImagebrand10);
changeBrandImage(brand11, silverImagebrand11, blackImagebrand11);

// For Redirect Start Project Page
document.getElementById("start-project-btn").addEventListener("click", () => {
    window.location.href = "../start-project.html";
});

// For Customer Readmore
const forCustomer1 = document.getElementById("for-customer-1");
const forCustomer2 = document.getElementById("for-customer-2");
const forCustomer3 = document.getElementById("for-customer-3");

const customer1UpperParagraph = document.getElementById("customer-1-upper-paragraph");
const customer2UpperParagraph = document.getElementById("customer-2-upper-paragraph");
const customer3UpperParagraph = document.getElementById("customer-3-upper-paragraph");

document.getElementById("customer-readmore-1-btn").addEventListener("click", () => {
    forCustomer2.className = "collapse";
    forCustomer3.className = "collapse";

    customer2UpperParagraph.style.display = "block";
    customer3UpperParagraph.style.display = "block"

    if (customer1UpperParagraph.style.display === "none") {
        customer1UpperParagraph.style.display = "block";
    } else {
        customer1UpperParagraph.style.display = "none";
    };
});

document.getElementById("customer-readmore-2-btn").addEventListener("click", () => {
    forCustomer1.className = "collapse";
    forCustomer3.className = "collapse";

    customer1UpperParagraph.style.display = "block";
    customer3UpperParagraph.style.display = "block"

    if (customer2UpperParagraph.style.display === "none") {
        customer2UpperParagraph.style.display = "block";
    } else {
        customer2UpperParagraph.style.display = "none";
    };
});

document.getElementById("customer-readmore-3-btn").addEventListener("click", () => {
    forCustomer1.className = "collapse";
    forCustomer2.className = "collapse";

    customer1UpperParagraph.style.display = "block";
    customer2UpperParagraph.style.display = "block"

    if (customer3UpperParagraph.style.display === "none") {
        customer3UpperParagraph.style.display = "block";
    } else {
        customer3UpperParagraph.style.display = "none";
    };
});
