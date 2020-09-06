var burger_menu = document.querySelector('.burger-menu');
var menu_btn = document.querySelector('.menu');
var aside_menu = document.querySelector('.aside-menu');
var close_btn = document.querySelector('.close-btn');

burger_menu.addEventListener('click', function(){
    aside_menu.classList.remove('md:hidden');
    if (aside_menu.classList != 'md:hidden'){
        console.log('coucou')
        menu_btn.classList.add('md:hidden');
    }
    
    close_btn.addEventListener('click', function(){
        console.log('coucou')
        aside_menu.classList.add('md:hidden');
        menu_btn.classList.remove('md:hidden');
    });
});
