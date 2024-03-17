import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const url = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('.review-list');
const btnContainer = document.querySelector('.review-buttons-wrapper');

async function getData() {
  const responce = await axios.get(url);
  console.log(responce);
  return responce.data;
}

getData()
  .then(data => {
    createElement(data);

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      updateOnWindowResize: true,
      slidesPerView: 1,
      swipeHandler: '.reviews-list-item',
      speed: 400,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },

        1440: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
      },
      navigation: {
        prevEl: '.previous-btn',
        nextEl: '.next-btn',
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        invert: true,
      },
    });
  })
  .catch(error => {
    list.innerHTML = `<li class="error-item">
       <p class="error-title">Oops, something went wrong 😢</p>
       <p class="error-text-describe">Problems with downloading content from the server. Error: ${error.message}</p>
    </li>`;
    btnContainer.classList.add('hide');
  });

function createElement(data) {
  const markup = data
    .map(({ avatar_url, author, review }) => {
      return `
        <li class="review-item swiper-slide">
          <img class="review-avatar" src="${avatar_url}" alt="author avatar"/>
          <p class="review-author-name">${author}</p>
          <p class="review-author-text">${review}</p>
        </li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

Swiper.use([Navigation, Pagination]);
