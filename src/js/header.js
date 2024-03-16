// mobile menu opening
const headerBtn = document.querySelector('.header-btn');
const backdrop = document.querySelector('.backdrop');
headerBtn.addEventListener('click', () => {
  backdrop.classList.remove('visually-hidden');
});
// mobile menu closing
const mobmenuCloseBtn = document.querySelector('.mobmenu__close');
mobmenuCloseBtn.addEventListener('click', () => {
  backdrop.classList.add('visually-hidden');
});
// tablet/desktop menu
const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('visually-hidden');
});
