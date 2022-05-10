function animate({modal, timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);
    console.log(modal.style.transform);
    draw(modal, progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function linear(timeFraction) {
  return timeFraction;
}

function draw(modal, progress) {
  modal.style.opacity = progress;
  modal.style.transform = `scale(${progress})`;
}

function reverseDraw(modal, progress) {
  modal.style.opacity = 1 - progress;
  modal.style.transform = `scale(${1 - progress})`;
}

function closeModal(modal, modalDialoge, triggerClass) {
  animate({
    modal: modalDialoge,
    duration: 350,
    draw: (modal, progress) => reverseDraw(modal, progress),
    timing: (timeFraction) => linear(timeFraction),
  });
  modal.classList.remove(triggerClass);
  document.body.style.overflow = '';
}

window.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.getElementsByClassName('button-subscribe'),
    modalCloseButton = document.getElementsByClassName('modal__close')[0],
    modal = document.getElementsByClassName('modal')[0],
    modalDialoge = document.getElementsByClassName('modal__dialoge')[0],
    triggerClass = 'modal_show';
  modalDialoge.style.opacity = 0;
  modalDialoge.style.transform = 'scale(0)';

  for (let i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', () => {
      modal.classList.add(triggerClass);
      document.body.style.overflow = 'hidden';
      animate({
        modal: modalDialoge,
        duration: 350,
        draw: (modal, progress) => draw(modal, progress),
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