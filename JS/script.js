
const menuHumberger = document.querySelector("#menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHumberger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})