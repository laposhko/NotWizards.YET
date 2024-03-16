import axios from 'axios';

// Завдання 1 - Розібратися з svg іконками
// Завдання 2 - Переглянути, чому не завантажуються зображення користувачів
// Завдання 3 - Додати бібліотеку для прокрутки відгуків
// Завдання 4 - Встановити пагінацію
const url = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('.review-list');
let totalElement;
let currentPage = 1;

function createElement(array) {
  const markup = array
    .map(({ author, avatar_url, review }) => {
      return `<li class="review-item">
        <div class="review-avatar-container">
            <img class="review-avatar" src="${avatar_url}" alt="author avatar"/>
        </div>
        <p class="review-author-name">${author}</p>
        <p class="review-author-text">${review}</p>
        </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

async function getData() {
  const responce = await axios.get(url);
  return responce.data;
}

getData()
  .then(array => {
    createElement(array);
  })
  .catch(error => console.log(error));
