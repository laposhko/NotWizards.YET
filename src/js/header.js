const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('visually-hidden');
});
