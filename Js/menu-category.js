let subMenu = document.getElementById('category');
let items =  document.getElementById('items-category');
let git = document.getElementById('icon-git');

subMenu.addEventListener('click', ()=>{
    items.classList.toggle('ocultarCategory');
    git.classList.toggle('rotarFlecha');
});