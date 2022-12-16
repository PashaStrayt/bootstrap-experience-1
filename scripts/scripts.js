const applyFilter = (event, filter) => {
  // Меняем активную кнопку

  const BUTTON_CLASS = 'button.blog__page-button';
  const BUTTON_ACTIVE_CLASS = 'blog__page-button--active';

  const allButtons = document.querySelectorAll(BUTTON_CLASS);
  const currentButton = event.target;

  allButtons.forEach(button => button.classList.remove(BUTTON_ACTIVE_CLASS));
  currentButton.classList.add(BUTTON_ACTIVE_CLASS);

  // Меняем контент блога

  const allRecords = document.querySelectorAll('.blog__record');
  const currentRecord = document.getElementById(filter);

  allRecords.forEach(record => {
    record.classList.add('d-none');
    record.classList.remove('d-flex');
  });
  currentRecord.classList.add('d-flex');
  currentRecord.classList.remove('d-none');
}

function validateForm(event) {
  if (!form.checkValidity()) {
    event.preventDefault();

    form.classList.add('was-validated');
  }
}