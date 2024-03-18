import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordions = Array.from(
  document.querySelectorAll('.accordion-container')
);
new Accordion(accordions, {
  elementClass: 'item',
  triggerClass: 'btn-arrow-toggl',
  panelClass: 'item-text',
  onOpen: function (currentElement) {
    console.log(currentElement.querySelector('svg'));
    currentElement.querySelector('button').classList.add('.is-rotate');
  },
});
