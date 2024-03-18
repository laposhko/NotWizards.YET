'use strict';
import Swiper from 'swiper/bundle';
import { Navigation, Keyboard, Mousewheel, EffectCube } from 'swiper/modules';
import 'swiper/css/bundle';

const swiper = new Swiper('.projects-swiper', {
  // modules: [Navigation, Keyboard, EffectCube, Mousewheel],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 100,
  speed: 800,
  loop: false,
  slidesPerGroup: 1,
  effect: 'cube',
  grabCursor: true,
  allowTouchMove: true,
  EdgeSwipeDetection: true,
  EdgeSwipeThreshold: 10,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: '.swiper-button-next-right',
    prevEl: '.swiper-button-prev-left',
  },
  hashNavigation: {
    watchState: true,
  },
  mousewheel: {
    enabled: true,
  },
  keyboard: {
    enabled: true,
  },
});
Swiper.use([Navigation]);
