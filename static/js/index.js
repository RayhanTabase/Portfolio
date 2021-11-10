import {
  addEvents,
} from './hamburger.js';

import showPopUp from './popUp.js';

window.addEventListener('resize', () => { window.location.reload(); });
if (window.innerWidth < 992) {
  addEvents();
}

document.querySelectorAll('.see_more').forEach((button) => {
  button.addEventListener('click', () => showPopUp(button.dataset.id));
});