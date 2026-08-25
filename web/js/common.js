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
const icons = document.querySelectorAll(".click-icon");

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        // 找到共同的父元素
        const parent = icon.closest(".mobile-has-sub-navbar");
        // 在父元素里面找到 submenu
        const sub = parent.querySelector(".mobile-sub-navbar");
        sub.classList.toggle("active");

        icon.classList.toggle("rotate");
    });
});

//haeder
let mm = gsap.matchMedia();

mm.add("(min-width: 1160px)", () => {
    gsap.fromTo(
        ".header",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 }
    )
});