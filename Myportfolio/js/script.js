let menuBtn = document.getElementById('menuBtn');
let navMenu = document.getElementById('navMenu');
let navMenuLink = document.querySelectorAll('#navMenu li a')

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('displayOn');
})

navMenuLink.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('displayOn');
    })
})
