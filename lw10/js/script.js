function animate({modal, modalDialoge, timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);
    
    draw(modal, modalDialoge, progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function reverseAnimate({modal, modalDialoge, timing, draw, duration, triggerClass}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);
    
    draw(modal, modalDialoge, progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      modal.classList.remove(triggerClass);
    }
  });
}

function linear(timeFraction) {
  return timeFraction;
}

function draw(modal, modalDialoge, progress) {
  modal.style.opacity = progress;
  modalDialoge.style.transform = `scale(${progress})`;
}

function reverseDraw(modal, modalDialoge, progress) {
  modal.style.opacity = 1 - progress;
  modalDialoge.style.transform = `scale(${1 - progress})`;
}

function closeModal(modal, modalDialoge, triggerClass) {
  reverseAnimate({
    modal: modal,
    modalDialoge: modalDialoge,
    duration: 200,
    draw: (modal, modalDialoge, progress) => reverseDraw(modal, modalDialoge, progress),
    timing: (timeFraction) => linear(timeFraction),
    triggerClass: triggerClass,
  });
  document.body.style.overflow = '';
}

window.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.getElementsByClassName('button-subscribe'),
    modalCloseButton = document.getElementsByClassName('modal__close')[0],
    modal = document.getElementsByClassName('modal')[0],
    modalDialoge = document.getElementsByClassName('modal__dialoge')[0],
    triggerClass = 'modal_show';
  modal.style.opacity = 0;
  modalDialoge.style.transform = 'scale(0)';

  for (let i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      modal.classList.add(triggerClass);
      animate({
        modal: modal,
        modalDialoge: modalDialoge,
        duration: 250,
        draw: (modal, modalDialoge, progress) => draw(modal, modalDialoge, progress),
        timing: (timeFraction) => linear(timeFraction),
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