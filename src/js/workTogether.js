// 1 валідація форми
// 2 post запит > відповідь модалка > BasicLightBox
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'
import axios from "axios";

const emailInput = document.getElementById('user-email');
const commentInput = document.getElementById ('user-comments');
const orderBtn = document.querySelector('.order-button');
const form = document.querySelector ('.order-form');
const textValid = document.querySelector ('.succes');
const textInvalid = document.querySelector ('.error');

// ВАЛІДАЦІЯ
emailInput.addEventListener('invalid', function(event){
    event.preventDefault()
});

emailInput.addEventListener ('focus', function(event) {
    event.preventDefault()
    if (!emailInput.checkValidity) {
        textValid.classList.add ('is-hidden')
    }
    else {
        textInvalid.classList.add ('is-hidden')
    }
});

emailInput.addEventListener('blur', function() {
    if (!emailInput.checkValidity()) {
        textInvalid.classList.remove ('is-hidden')
        textValid.classList.add ('is-hidden')
        emailInput.reportValidity();
    }
    else {
        textInvalid.classList.add ('is-hidden')
        textValid.classList.remove ('is-hidden')
        emailInput.reportValidity();
    }
});


// ЗАПИТ
const BASE_URL = 'https://portfolio-js.b.goit.study/api'


const addNewUser = async (event) => {
    event.preventDefault()
    try {
        const newUser ={
            "email": emailInput.value,
            "comment": commentInput.value
        }
        const response = await axios.post(`${BASE_URL}/requests`, newUser, {
            headers: {
              'Content-Type': 'application/json'
            }})
        console.log(response.data)
        const inst = basicLightbox.create(
            `<div class="modal">
            <button class="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs#icon-x.svg"></use>
              </svg> 
            </button>
              <div class modal-message">
                <h3 class="modal-title">${response.data.title}</h3>
                <p class="modal-text">${response.data.message}</p>
              </div>
          </div>`)
          inst.show()
    }
    catch(error) {
        console.log(error)
        const inst = basicLightbox.create(
            `<div class="modal">
            <button class="close-btn" type="button">
              <svg class="close-btn-icon" width="22" height="22">
                <use href="./img/symbol-defs#icon-x.svg"></use>
              </svg> 
            </button>
             <div class "modal-message">
               <h3 class="modal-title">Oops...something went wrong</h3>
               <p class="modal-text">${error.response.data.message}</p>
             </div>
          </div>`)
          inst.show()
    }
    finally {
        form.reset();
        textValid.classList.add('is-hidden')
    }
}
form.addEventListener ('submit', addNewUser);

