<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/normalize.css">
  <link rel="stylesheet" href="./css/variables.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/hero.css">
  <link rel="stylesheet" href="./css/info.css">
  <link rel="stylesheet" href="./css/cant_do.css">
  <link rel="stylesheet" href="./css/about.css">
  <link rel="stylesheet" href="./css/form.css">
  <link rel="stylesheet" href="./css/footer.css"> 
  <title>Document</title>
</head>
<body class="file-padding">
  <header class="header header-indent">
    <img class="header__logo" src="./images/svg/logo_black.svg" alt="logo">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a class="nav__list-item-link">Что будет на курсе?</a>
        </li>

        <li class="nav__list-item">
          <a class="nav__list-item-link">Вопросы</a>
        </li>

        <li class="nav__list-item">
          <a class="nav__list-item-link">Автор</a>
        </li>
      </ul>
    </nav>
    <button class="button">Записаться на курс</button>
  </header>

  <main class="main">
    <section class="hero">
      <div class="hero__text">
        <h1 class="hero__text-header">Не <span class="highlight">делай</span> это</h1>
        <p class="hero__text-desc">Онлайн-курс для творческих людей, о том, как управлять своим временем </p>
        <button class="button button_long">Записаться на курс</button>
      </div>

      <img class="hero__img" src="./images/hero.png" alt="закончил" />
    </section>

    <section class="info">
      <ul class="info__list">
        <li class="info__list-item info__list-item_first">
          <img  class="info__list-item-icon" src="./images/svg/clock.svg" alt="clock"/>
          <p class="info__list-item-text">
              Для тех, у кого слишком много идей и слишком мало времени
          </p>
        </li>
        
        <li class="info__list-item info__list-item_second">
          <img class="info__list-item-icon" src="./images/svg/notebook.svg" alt="notebook"/>
          <p class="info__list-item-text">
              Метод «списка не дел», который позволит успевать и реализовывать
          </p>
        </li>

        <li class="info__list-item">
          <img class="info__list-item-icon" src="./images/svg/target.svg" alt="target">
          <p class="info__list-item-text">
              Курс научит творческих людей сосредоточиваться
          </p>
        </li>
      </ul>
    </section>

    <section class="cant-do">
      <div class="cant-do__row-first">
        <div class="cant-do__row-img-wrapper">
          <img class="cant-do__row-first-img" src="./images/finances.png" alt="финансы" />
        </div>
        
        <div class="cant-do__row-first-desc">
          <h3 class="cant-do__row-desc-header">
              Ты не успеешь
          </h3>

          <p class="cant-do__row-desc-text">
              Всех творческих людей объединяет одна проблема - отсутствие времени на реализацию идей. Как прибавить суткам часы, рассмотрим в нашем курсе.
          </p>
        </div>
      </div>

      <div class="cant-do__row-second">
        <div class="cant-do__row-second-desc">
          <h3 class="cant-do__row-desc-header">
            Опять дедлайн
          </h3>

          <p class="cant-do__row-desc-text">
            В мире, где столько всего интересного, когда же успевать жить?
          </p>
        </div>

        <div class="cant-do__row-img-wrapper">
          <img class="cant-do__row-second-img" src="./images/mind_blowing.png" alt="взрыв мозга" />
        </div>
      </div>
    </section>

    <section class="about">
      <h2 class="about__header">На курсе ты <span class="highlight">сможешь</span></h2>

      <ul class="about__list">
        <li class="about__list-item">
          <img class="about__list-item-img" src="./images/svg/one_fingers_up.svg" alt="oneFingersUp"/>
          <p class="about__list-item-text">
              Понять, что нужно делать, а что делать не стоит.
          </p>
        </li>

        <li class="about__list-item">
          <img class="about__list-item-img" src="./images/svg/two_fingers_up.svg" alt="twoFingersUp"/>
          <p class="about__list-item-text">
              Перестать себя искусственно ограничивать.
          </p>
        </li>

        <li class="about__list-item">
          <img class="about__list-item-img" src="./images/svg/three_fingers_up_right.svg" alt="threeFingersUpRight"/>
          <p class="about__list-item-text">
              Определить сильные стороны и начать использовать слабые.
          </p>
        </li>

        <li class="about__list-item">
          <img class="about__list-item-img" src="./images/svg/four_fingers_up.svg" alt="fourFingerUp" />
          <p class="about__list-item-text">
              Научиться достигать любой цели в 3 понятных шага.
          </p>
        </li>

        <li class="about__list-item">
          <img class="about__list-item-img" src="./images/svg/five_fingers_up.svg" alt="fiveFingersUp" />
          <p class="about__list-item-text">
              Сотрудничать эффективно и с правильными людьми.
          </p>
        </li>

        <li class="about__list-item">
          <img class="about__list-item-img" src="./images/svg/three_fingers_up_middle.svg" alt="threeFingersUpMiddle" />
          <p class="about__list-item-text">
              Оптимизировать общение с клиентами и проведение совещаний.
          </p>
        </li>
      </ul>
    </section>

    <?php
      require './php/templates/form.php';
    ?>
  </main>

  <footer class="footer">
    <img class="footer__logo" src="./images/svg/logo_white.svg" alt="logo">
  </footer>
</body>
</html>