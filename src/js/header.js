// mobile menu opening
const headerBtn = document.querySelector('.header-btn');
const backdrop = document.querySelector('.backdrop');
headerBtn.addEventListener('click', () => {
  backdrop.classList.remove('backdrop--hide');

  backdrop.classList.add('backdrop--show');
});
// mobile menu closing
const mobmenuCloseBtn = document.querySelector('.mobmenu__close');
mobmenuCloseBtn.addEventListener('click', () => {
  backdrop.classList.remove('backdrop--show');
  backdrop.classList.add('backdrop--hide');
});
// tablet/desktop menu
const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('visually-hidden');
});
// smooth scroll
const anchors = document.querySelectorAll('.header-menu-link');
for (const anchor of anchors) {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    const wishedSection = document.getElementById(blockID);
    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
    headerMenu.classList.toggle('visually-hidden');
  });
}

const mobAnchors = document.querySelectorAll('.mobmenu-link');
for (const anchor of mobAnchors) {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    const wishedSection = document.getElementById(blockID);
    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
    backdrop.classList.remove('backdrop--show');
    backdrop.classList.add('backdrop--hide');
  });
}
