const switchButton = document.querySelector('#switch-theme');

switchButton.addEventListener('click', buttonSwitchHandler);

function buttonSwitchHandler() {
  const body = document.querySelector('body');
  body.classList.toggle('light-theme');

  const pngForChange = document.querySelectorAll('.change');
  pngForChange[0].classList.toggle('backdrop-white');
  pngForChange[1].classList.toggle('hero-white');
}
