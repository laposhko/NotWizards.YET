import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';

const emailInput = document.getElementById('user-email');
const commentInput = document.getElementById('user-comments');
const orderBtn = document.querySelector('.order-button');
const form = document.querySelector('.order-form');
const textValid = document.querySelector('.succes');
const textInvalid = document.querySelector('.error');

let inst;

// ВАЛІДАЦІЯ
// прибрати стандартне повідомлення браузера
emailInput.addEventListener('invalid', function (event) {
  event.preventDefault();
});

// валідація за патерном
function changeInput(event) {
  if (!emailInput.checkValidity()) {
    orderBtn.disabled = true;
    textInvalid.classList.remove('is-hidden');
    textValid.classList.add('is-hidden');
    emailInput.reportValidity();
  }
  if (emailInput.value === '') {
    orderBtn.disabled = true;
    textInvalid.classList.add('is-hidden');
    textValid.classList.add('is-hidden');
  } else if (emailInput.checkValidity()) {
    orderBtn.disabled = false;
    textInvalid.classList.add('is-hidden');
    textValid.classList.remove('is-hidden');
    emailInput.reportValidity();
  }
}
// слухачі на інпут
emailInput.addEventListener('focus', changeInput);
emailInput.addEventListener('input', changeInput);
emailInput.addEventListener('blur', changeInput);

// ЗАПИТ
const BASE_URL = 'https://portfolio-js.b.goit.study/api';

const addNewUser = async event => {
  event.preventDefault();
  try {
    const newUser = {
      email: emailInput.value,
      comment: commentInput.value,
    };
    const response = await axios.post(`${BASE_URL}/requests`, newUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    inst = basicLightbox.create(
      `<div class="modal">
            <button class="close-btn" id="close-btn" type="button">
              // <svg class="close-btn-icon" width="22" height="22">
              //   <use href="./img/symbol-defs.svg#icon-x"></use>
              // </svg> 
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
</svg>
            </button>
              <div class modal-message">
                <h3 class="modal-title">${response.data.title}</h3>
                <p class="modal-text">${response.data.message}</p>
              </div>
          </div>`
    );
    inst.show();
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
      inst.close();
    });
  } catch (error) {
    inst = basicLightbox.create(
      `<div class="modal">
            <button class="close-btn" id="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs.svg#icon-x"></use>
              </svg> 
            </button>
             <div class "modal-message">
               <h3 class="modal-title">Oops...something went wrong</h3>
               <p class="modal-text">${error.response.data.message}</p>
             </div>
          </div>`
    );
    inst.show();
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
      inst.close();
    });
  } finally {
    form.reset();
    textValid.classList.add('is-hidden');
    textInvalid.classList.add('is-hidden');
  }
};
form.addEventListener('submit', addNewUser);

// ОБРІЗАТИ ТЕКСТ
function truncateText(commentInput) {
  const maxLength = 35;
  const currentValue = commentInput.value;
  if (currentValue.length > maxLength) {
    const truncatedValue = currentValue.substring(0, maxLength);
    commentInput.value = truncatedValue + '…';
  }
}
commentInput.addEventListener('input', function () {
  truncateText(this);
});
