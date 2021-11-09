export const navMobile = document.querySelector('.nav-mobile');
export const navLinks = document.querySelector('.nav-links');
export function showMenu() {
  navMobile.style.display = 'none';
  navLinks.classList.remove('drop-up');
  navLinks.classList.add('drop-down');
  navLinks.style.display = 'flex';
}
export function hideMenu() {
  navLinks.classList.remove('drop-down');
  navLinks.classList.add('drop-up');
  setTimeout(() => {
    navMobile.style.display = 'flex';
    navLinks.style.display = 'none';
  }, 1000);
}
export function addEvents() {
  document.querySelector('.menu-open').addEventListener('click', () => showMenu());
  document.querySelector('.menu-close').addEventListener('click', () => hideMenu());
  document.querySelectorAll('.section-link').forEach((link) => {
    link.addEventListener('click', () => hideMenu());
  });
}

