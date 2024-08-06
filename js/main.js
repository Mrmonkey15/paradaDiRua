// Side-bar//
document.addEventListener('DOMContentLoaded', function(){
    let burgerMenu = document.getElementById('burgerMenuIcon')
    let closebutton = document.getElementById('closebtn')
    let sidebarDiv = document.querySelector('.sidebar')

burgerMenu.addEventListener('click', function(){
    sidebarDiv.classList.toggle('open');
})

closebutton.addEventListener('click', function(){
    sidebarDiv.classList.remove('open')
})
})