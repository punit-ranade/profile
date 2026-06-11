// Navbar Shadow

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});

// Scroll Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".section").forEach(section => {

    section.classList.add("fade-in");

    observer.observe(section);

});
