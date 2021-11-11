import {
  email,
  name,
  storageHandler,
} from './localStorage.js';

const errorMessage = document.querySelector('#contact-form-errors');
function showError(error) {
  errorMessage.innerHTML = `<p>${error}`;
}
export function removeErrorMessage() {
  errorMessage.innerHTML = '';
}
export const validateEmail = (e) => {
  if (email.value === '' || /[A-Z]/.test(email.value)) {
    showError('Email should contain only lowercase characters');
    e.preventDefault();
  } else {
    storageHandler(name.value, email.value, '');
  }
};