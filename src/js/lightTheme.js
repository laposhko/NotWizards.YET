const switchButton = document.querySelector('#switch-theme');

switchButton.addEventListener('click', buttonSwitchHandler);

function buttonSwitchHandler() {
  const body = document.querySelector('body');
  body.classList.toggle('light-theme');

  const mobileMenuBg = document.querySelector('.backdrop');
  mobileMenuBg.classList.toggle('hero-wite');
}
