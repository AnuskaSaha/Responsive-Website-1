let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.nav-list');
let rightnav = document.querySelector('.right-nav');


burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-nav-res');
    rightnav.classList.toggle('v-nav-res');
    navbar.classList.toggle('h-nav-res');
});