function formUser({name, email, job, agreement}) {
  const avatarUrl = './styles/images/svg/avatar.svg';
    user = document.createElement('li'),
    elementAvatar = document.createElement('img'),
    elementName = document.createElement('h3'),
    elementEmail = document.createElement('p'),
    elementJob = document.createElement('p'),
    elementAgreement = document.createElement('p');
  
  elementAvatar.src = avatarUrl;
  elementAvatar.alt = 'аватар';
  elementName.textContent = name;
  elementEmail.textContent = email;
  elementJob.textContent = job === '' ? 'не выбрано' : job;
  elementAgreement.textContent = agreement;

  user.classList.add('main__users-item');
  elementAvatar.classList.add('main__users-item-avatar');
  elementName.classList.add('main__users-item-text');
  elementEmail.classList.add('main__users-item-text');
  elementJob.classList.add('main__users-item-text');
  elementAgreement.classList.add('main__users-item-text');

  user.appendChild(elementAvatar);
  user.appendChild(elementName);
  user.appendChild(elementEmail);
  user.appendChild(elementJob);
  user.appendChild(elementAgreement);
  return user;
}

window.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementsByClassName('main__button-get')[0],
    handlerUrl = './src/php/service/get_all_users.php',
    usersBlock = document.getElementsByClassName('main__users-block')[0],
    emptyMessage = document.getElementsByClassName('main__users-block-empty-message')[0];

  trigger.addEventListener('click', () => {
    emptyMessage.style.display = 'none';
    usersBlock.textContent = '';
    fetch(handlerUrl)
    .then(response => response.json())
    .then(data => {
      if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
          usersBlock.appendChild(formUser(data[i]));
        }
      } else {
        emptyMessage.style.display = 'block';
      }
    });
  });
});