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
              <svg class="close-btn-icon" width="22" height="22">
                <use href="/img/symbol-defs.svg#icon-x"></use>
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
