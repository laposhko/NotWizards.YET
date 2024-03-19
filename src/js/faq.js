import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  showMultiple: true,
  elementClass: 'item',
  triggerClass: 'item-box',
  panelClass: 'item-text',
  onOpen: function (currentElement) {
    currentElement.querySelector('.btn-arrow-toggl').classList.add('active');
  },
  onClose: function (currentElement) {
    currentElement.querySelector('.btn-arrow-toggl').classList.remove('active');
  },
});
