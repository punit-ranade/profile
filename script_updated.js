// ======================================
// PREMIUM FLOATING HEADER SCROLL EFFECT
// ======================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// Mobile menu
const toggle=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
if(toggle && mobileMenu){
 toggle.addEventListener('click',()=>{
   toggle.classList.toggle('active');
   mobileMenu.classList.toggle('open');
   document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':'';
 });
 document.querySelectorAll('.mobile-menu a').forEach(a=>{
   a.addEventListener('click',()=>{
     toggle.classList.remove('active');
     mobileMenu.classList.remove('open');
     document.body.style.overflow='';
   });
 });
}
