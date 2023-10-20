(function(){
    const openButon = document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-link');
    const closeMenu = document.querySelector('.nav-close');

    openButon.addEventListener('click', ()=>{
        menu.classList.add('nav-link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav-link--show');
    });
})();