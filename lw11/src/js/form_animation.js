function animate({modal, modalDialoge, timing = null, draw = null, duration = 250, triggerClass = null}, reverse = false) {
  if (!timing) {
    timing = (timeFraction) => {
      return timeFraction;
    }
  }

  if (!draw) {
    if (reverse) {
      draw = (modal, modalDialoge, progress) => {
        modal.style.opacity = 1 - progress;
        modalDialoge.style.transform = `scale(${1 - progress})`;
      }
    } else {
      draw = (modal, modalDialoge, progress) => {
        modal.style.opacity = progress;
        modalDialoge.style.transform = `scale(${progress})`;
      }
    }
  }

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);
    
    draw(modal, modalDialoge, progress); 

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      if (reverse) {
        modal.classList.remove(triggerClass);
      }
    }
  });
}

function closeModal(modal, modalDialoge, triggerClass) {
  animate({
    modal: modal,
    modalDialoge: modalDialoge,
    duration: 200,
    triggerClass: triggerClass,
  }, true);
  document.body.style.overflow = '';
}

window.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.getElementsByClassName('button-subscribe'),
    modalCloseButton = document.getElementsByClassName('modal__close')[0],
    modal = document.getElementsByClassName('modal')[0],
    modalDialoge = document.getElementsByClassName('modal__dialoge')[0],
    form = document.getElementsByClassName('modal__form')[0],
    elementMessageError = document.getElementsByClassName('modal__message-error')[0],
    triggerClass = 'modal_show',
    hideClass = 'modal_hide';
  modal.style.opacity = 0;
  modalDialoge.style.transform = 'scale(0)';

  for (let i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', () => {
      form.classList.remove(hideClass);
      elementMessageError.classList.remove(triggerClass);
      document.body.style.overflow = 'hidden';
      modal.classList.add(triggerClass);
      animate({
        modal: modal,
        modalDialoge: modalDialoge,
      });
    });
  }

  modalCloseButton.addEventListener('click', () => closeModal(modal, modalDialoge, triggerClass));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal, modalDialoge, triggerClass);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains(triggerClass)) {
      closeModal(modal, modalDialoge, triggerClass);
    }
  });
});