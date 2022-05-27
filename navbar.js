const btnMenu = document.querySelector("#btnMenu");
const menuList = document.querySelector("#menuList");
btnMenu.addEventListener('click', () => menuList.classList.toggle("hidden-menu"));

document.querySelector(".dropdown").addEventListener("click",function(){document.querySelector(".dropdown ul").classList.toggle("show");})