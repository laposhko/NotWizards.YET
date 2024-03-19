'use strict';

////////////////////////ACCORDION CODE//////////////////////////////

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainer = Array.from(
  document.querySelectorAll('.container-about')
);

const accordions = accordionContainer.map(container =>
  container.querySelector('.accordion-list')
);

new Accordion(accordions, {
    showMultiple: true,
    elementClass: 'accordion-element',
    triggerClass: 'accordion-title',
    panelClass: 'accordion-description',
    openOnInit: [0],
    onOpen: function (currentElement) {
        currentElement.querySelector('.accordion-title').classList.add('active');
    },
    onClose: function (currentElement) {
        currentElement.querySelector('.accordion-title').classList.remove('active');
    },
});

const firstAccordionTitle = accordions[0].querySelector('.accordion-title');
firstAccordionTitle.classList.add('active');

////////////////////////SWIPER CODE//////////////////////////////

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiperAbout = new Swiper('.skills-container', {
  loop: true,
  direction: 'horizontal',
  allowSlideNext: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: '.swipe-next-button',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
});
