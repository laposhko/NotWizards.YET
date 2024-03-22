// mobile menu opening
const headerBtn = document.querySelector('.header-btn');
const backdrop = document.querySelector('.backdrop');
function showMobileMenu() {
  backdrop.classList.remove('backdrop--hide');
  backdrop.classList.add('backdrop--show');
}
headerBtn.addEventListener('click', showMobileMenu);

// mobile menu closing
const mobmenuCloseBtn = document.querySelector('.mobmenu__close');
mobmenuCloseBtn.addEventListener('click', closeMobileMenu);
function closeMobileMenu() {
  backdrop.classList.remove('backdrop--show');
  backdrop.classList.add('backdrop--hide');
}
// tablet/desktop menu
const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header-menu');
function toggleHeaderMenu() {
  headerMenu.classList.toggle('visually-hidden');
}
menuBtn.addEventListener('click', toggleHeaderMenu);

function closeHeaderMenu() {
  headerMenu.classList.add('visually-hidden');
}

// smooth scroll
const anchorsArray = Array.from(document.querySelectorAll('.header-menu-link'));
anchorsArray.push(document.querySelector('.header-order'));
for (const anchor of anchorsArray) {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const wishedSection = document.getElementById(anchor.getAttribute('href'));
    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
    closeHeaderMenu();
  });
}

const mobAnchors = Array.from(document.querySelectorAll('.mobmenu-link'));
mobAnchors.push(document.querySelector('.mobmenu-order'));
for (const anchor of mobAnchors) {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const wishedSection = document.getElementById(anchor.getAttribute('href'));
    wishedSection.scrollIntoView({
      behavior: 'smooth',
    });
    closeMobileMenu();
  });
}
