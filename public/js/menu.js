let btnMenu = document.querySelectorAll('#btnmenu');
let menu = document.querySelectorAll('#menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});