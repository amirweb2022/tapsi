const containerMenu = document.querySelector(".container-menu");
const menuMobile = document.querySelector(".menu-mobile");
containerMenu.addEventListener("click" , ()=> {
    containerMenu.classList.toggle("change");
    menuMobile.classList.toggle("active-menu");
});