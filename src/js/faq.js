import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  elementClass: 'item',
  triggerClass: 'item-box',
  panelClass: 'item-text',
  onOpen: function (currentElement) {
    const arrowIcon = currentElement.querySelector('.btn-arrow-toggl use');
    arrowIcon.setAttribute('href', '/img/symbol-defs.svg#icon-arrow-up');
  },
  onClose: function (currentElement) {
    const arrowIcon = currentElement.querySelector('.btn-arrow-toggl use');
    arrowIcon.setAttribute('href', '/img/symbol-defs.svg#icon-arrow-down');
  },
});
