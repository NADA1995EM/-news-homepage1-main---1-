const iconMenu =document.querySelector(".menu");
const closeMenu=document.querySelector(".close");
const menu =document.querySelector("ul");
const menuItem =document.querySelector(".ul li a");


iconMenu.addEventListener("click", ()=>{
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
        menu.classList.toggle("hide");

})
closeMenu.addEventListener("click", ()=>{
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
        menu.classList.toggle("hide");

})