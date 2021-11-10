const error_message = document.querySelector('#contact-form-errors');
function showError(error) {
  error_message.innerHTML = `<p>${error}`;
}
export function removeErrorMessage(){
  error_message.innerHTML = '';
}
export const validateEmail = (e) => {
  const email = document.querySelector('input[name="email"]')
  if (email.value === '' || /[A-Z]/.test(email)) {
    e.preventDefault();
    showError('Email should contain only lowercase characters');
  } 
}