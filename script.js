// =====================================
// FADE IN ANIMATION
// =====================================

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll(
'.section,.project-card,.highlight-card'
).forEach(el=>{

el.classList.add('hidden');

observer.observe(el);

});

// =====================================
// ACTIVE NAVIGATION
// =====================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

// =====================================
// IMAGE MODAL
// =====================================

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".project-card img").forEach(img=>{

img.addEventListener("click",()=>{

modal.style.display = "flex";

modalImg.src = img.src;

});

});

function closeModal(){

modal.style.display = "none";

}
