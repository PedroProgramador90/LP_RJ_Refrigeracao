const listMobile = document.getElementById("list-mobile");
const menuMobile = document.getElementById("menu-mobile");

listMobile.addEventListener("click",function(){
  menuMobile.classList.add('show-menu');
});

menuMobile.addEventListener("click",function(){
    menuMobile.classList.remove('show-menu');
})