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
const mobileNavbarText = document.getElementById("mobile-navbar-text");

//const mobileSubNavbarHidden = document.getElementById("mobile-sub-navbar-hidden");

const changeSubNavbarIcon = document.getElementById("change-sub-navbar-icon");

mobileNavbarText.addEventListener("click", () => {
    //mobileSubNavbarHidden.classList.toggle("active");

    //mobileNavbarText.classList.toggle("active");

    changeSubNavbarIcon.classList.toggle("rotate");
});



const subNavbarActive = document.querySelectorAll(".sub-navbar-active");

subNavbarActive.forEach((subNavbarActive) => {

    subNavbarActive.addEventListener("click", () => {

        const mobileSubNavbar = document.querySelectorAll(".mobile-sub-navbar");

        mobileSubNavbar.classList.toggle("active");

    });

});
