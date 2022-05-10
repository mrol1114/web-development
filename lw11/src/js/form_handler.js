function isValidName(name) {
  const invalidText = name.replace(/[а-яА-Я ]/g, '');
  if (invalidText !== '' || name === '') {
    return false;
  }
  return true;
}

function isValidEmail(email) {
  const emailSeparator = email.replace(/[^@]/g, ''),
    domain = emailSeparator === '' ? '' : email.split(emailSeparator)[1],
    invalidText = domain.replace(/[a-zA-Z.]/g, '');

  if (emailSeparator.length !== 1 || emailSeparator === '' || email === '' || invalidText !== '') {
    return false;
  }
  return true;
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementsByClassName('modal__form')[0],
    elementEmail = document.getElementsByClassName('modal__input-email')[0],
    elementName = document.getElementsByClassName('modal__input-name')[0],
    elementSelectJob = document.getElementsByClassName('modal__select')[0],
    elementAgreement = document.getElementsByClassName('modal__check-info-box')[0],
    selectJobDefaulVal = 'Деятельность',
    modal = document.getElementsByClassName('modal')[0],
    modalDialoge = document.getElementsByClassName('modal__dialoge')[0],
    elementMessageError = document.getElementsByClassName('modal__message-error')[0],
    triggerClass = 'modal_show',
    hideClass = 'modal_hide';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    elementName.classList.remove('modal__input_error');
    elementEmail.classList.remove('modal__input_error');

    let valid = true;
    const email = elementEmail.value.replace(/[ ]/g, ' '),
      name = elementName.value.replace(/ +/g, ' ').trim(),
      job = elementSelectJob.value,
      agreement = elementAgreement.checked;

    valid = isValidName(name);
    if (!valid) {
      elementName.classList.add('modal__input_error');
      valid = false;
    }

    valid = isValidEmail(email);
    if (!valid) {
      elementEmail.classList.add('modal__input_error');
      valid = false;
    }

    if (valid) {
      const user = {
        email: email,
        name: name,
        job: job === selectJobDefaulVal ? '' : job,
        agreement: agreement,
      };

      fetch('./src/php/service/save_user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      })
      .then(response => {
        if (response.ok) {
          closeModal(modal, modalDialoge, triggerClass);
        } else {
          throw response;
        }
      })
      .catch(response => {
        elementMessageError.style.height = `${form.clientHeight}px`;
        form.classList.add(hideClass);
        elementMessageError.classList.add(triggerClass);
      });
    }
  });
});