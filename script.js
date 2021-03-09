const x = document.getElementById("x");
const mobileMenu = document.getElementById("mobileMenu");
const burger = document.getElementById("burger");

const toggleMenu = () => {
    mobileMenu.classList.toggle("show");
}

x.addEventListener("click", toggleMenu);
burger.addEventListener("click", toggleMenu);
