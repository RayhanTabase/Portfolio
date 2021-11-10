const errorMessage = document.querySelector('#contact-form-errors');
function showError(error) {
  errorMessage.innerHTML = `<p>${error}`;
}
export function removeErrorMessage() {
  errorMessage.innerHTML = '';
}
export const validateEmail = (e) => {
  const email = document.querySelector('input[name="email"]');
  if (email.value === '' || /[A-Z]/.test(email)) {
    e.preventDefault();
    showError('Email should contain only lowercase characters');
  }
};