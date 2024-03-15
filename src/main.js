// create your functions in separate .js files in js folder and import here

// header menu dropdown
const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('visually-hidden');
});
