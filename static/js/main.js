import addEvents from './hamburger.js';
import showPopUp from './popUp.js';
import {
  removeErrorMessage,
  validateEmail,
} from './validators.js';
import { storeValues, autoFill } from './localStorage.js';

function main() {
  window.addEventListener('resize', () => { window.location.reload(); });
  if (window.innerWidth < 992) {
    addEvents();
  }
  document.querySelectorAll('.see_more').forEach((button) => {
    button.addEventListener('click', () => showPopUp(button.dataset.id));
  });
  document.querySelector('#contact-form').addEventListener('submit', validateEmail);
  document.querySelector('input[name="email"]').addEventListener('input', removeErrorMessage);

  autoFill();
  storeValues();
}

window.onload = main;
