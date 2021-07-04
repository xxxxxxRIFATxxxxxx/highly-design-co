// For Sidebar
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
};

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});


// For Nav Item Active
var btnContainer = document.querySelector(".nav-links");
var btns = btnContainer.getElementsByClassName("nav-li");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("nav-active");
        current[0].className = current[0].className.replace(" nav-active", "");
        this.className += " nav-active";
    });
};