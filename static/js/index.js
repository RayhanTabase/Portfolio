const menu = document.querySelector('.menu-icon-open');
const close = document.querySelector('.menu-icon-close');
const navLinks = document.querySelector('.navbar .nav-links');

menu.addEventListener('click', e => {
  navLinks.classList.add('open')
})

close.addEventListener('click', e => {
  navLinks.classList.remove('open')
})