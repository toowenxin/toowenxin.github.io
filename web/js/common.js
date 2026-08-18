const menuIcon = document.getElementById("menuIcon");
const menuNavbar = document.getElementById("mobileNavbar");

menuIcon.addEventListener("click", () => {
    menuNavbar.classList.toggle("active");
    // Change icon
    if (menuNavbar.classList.contains("active")) {
        menuIcon.innerHTML = "&times;"; // × (cross)
        menuIcon.style.fontSize = "50px";
    } else {
        menuIcon.innerHTML = "&#9776;"; // ☰ (hamburger)
        menuIcon.style.fontSize = "30px";
    }
});

//subNavbar
const submenus = document.querySelectorAll(".mobile-has-sub-navbar");

submenus.forEach((submenu) => {

    submenu.addEventListener("click", () => {

        const sub = submenu.querySelector(".mobile-sub-navbar");

        sub.classList.toggle("active");

        const changeIcon = submenu.querySelector(".change-icon");

        changeIcon.classList.toggle("rotate");

    });

});



