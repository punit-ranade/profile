/* ==========================================
   PREMIUM GLASS HEADER
========================================== */

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const sections = document.querySelectorAll("section[id]");

/* ------------------------------------------
   Navbar scroll effect
------------------------------------------ */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* ------------------------------------------
   Mobile Menu
------------------------------------------ */

menuBtn.addEventListener("click", () => {

    mobileNav.classList.toggle("open");
    menuBtn.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

/* Close menu when clicking a link */

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("open");
        menuBtn.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});

/* ------------------------------------------
   Active Navigation
------------------------------------------ */

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ------------------------------------------
   Close mobile menu on resize
------------------------------------------ */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        mobileNav.classList.remove("open");
        menuBtn.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

});
