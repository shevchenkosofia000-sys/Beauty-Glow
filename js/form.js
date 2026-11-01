const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = '';
  let firstInvalid = null;

  for (const field of form.querySelectorAll('input, textarea')) {
    const error = document.getElementById(field.id + '-error');
    if (!error) continue;
    if (field.checkValidity()) {
      error.textContent = '';
      field.removeAttribute('aria-invalid');
    } else {
      error.textContent = 'Помилка: ' + field.validationMessage;
      field.setAttribute('aria-invalid', 'true');
      firstInvalid = firstInvalid || field;
    }
  }

  if (firstInvalid) { firstInvalid.focus(); return; }
  formStatus.textContent = 'Дякуємо! Повідомлення прийнято.';
  form.reset();
});