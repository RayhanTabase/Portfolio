const errorMessage = document.querySelector('#contact-form-errors');
function showError(error) {
  errorMessage.innerHTML = `<p>${error}`;
}
export function removeErrorMessage() {
  errorMessage.innerHTML = '';
}
export const validateEmail = (e) => {
  const email = document.querySelector('input[name="email"]').value;
  if (email === '' || /[A-Z]/.test(email)) {
    showError('Email should contain only lowercase characters');
    e.preventDefault();
  }
};