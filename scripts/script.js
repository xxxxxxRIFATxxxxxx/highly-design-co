// Common Function For Read More
const readMore = (id) => {
    const extraText = document.getElementById(id);
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
    } else {
        extraText.style.display = "none";
    };
};

// For Read More One
document.getElementById("read-more-one").addEventListener("click", () => {
    readMore("extra-text-one");
});

// For Read More Two
document.getElementById("read-more-two").addEventListener("click", () => {
    readMore("extra-text-two");
});

// For Read More Three
document.getElementById("read-more-three").addEventListener("click", () => {
    readMore("extra-text-three");
});

// For Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// For Redirect Start Project Page
document.getElementById("start-project-btn").addEventListener("click", () => {
    window.location.replace("start-project.html");
});