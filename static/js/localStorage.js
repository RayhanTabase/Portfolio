export const name = document.querySelector('input[name="fullname"]');
export const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

export const storageHandler = (name, email, message) => {
  const contactForm = JSON.stringify({ name, email, message });
  localStorage.setItem('contactForm', contactForm);
};

export function autoFill() {
  const formValues = JSON.parse(localStorage.getItem('contactForm'));
  if (formValues) {
    name.value = formValues.name;
    email.value = formValues.email;
    message.value = formValues.message;
  }
}

export function storeValues() {
  name.addEventListener('input', () => storageHandler(name.value, email.value, message.value));
  email.addEventListener('input', () => storageHandler(name.value, email.value, message.value));
  message.addEventListener('input', () => storageHandler(name.value, email.value, message.value));
}