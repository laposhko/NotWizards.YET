import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const url = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('.review-list');

Swiper.use([Navigation, Pagination]);

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
    const swiper = new Swiper('.swiper', {
      modules: [Pagination, Navigation],
      updateOnWindowResize: true,
      speed: 400,
      direction: 'horizontal',
      slidesPerView: 1,
      enabled: true,
      swipeHandler: '.review-item',
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
      },
    });
  })
  .catch(error => console.log(error));
