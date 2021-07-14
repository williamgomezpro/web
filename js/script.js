// declaro las variables
let menu = document.querySelector('#menu');
let menuBar = document.querySelector('#menuBar');

// invoco el evento clic de la variable menú
menuBar.addEventListener('click', function(){
    menu.classList.toggle('menuToogle');
})