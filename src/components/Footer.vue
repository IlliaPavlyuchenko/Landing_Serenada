<script setup></script>

<template>
  <footer class="footer">
    <div class="container footer__in">
      <div class="footer__col">
        <div class="footer__logo">
          <div class="logo">
            <a href="#"
              ><img src="@/assets/icons/logo.svg" alt="Serenada Cruise"
            /></a>
          </div>
        </div>
        <div class="footer__socials">
          <a href="#"
            ><img src="@/assets/icons/instagram.svg" alt="instagram"
          /></a>
          <a href="#"
            ><img src="@/assets/icons/facebook.svg" alt="facebook"
          /></a>
          <a href="#"><img src="@/assets/icons/twitter.svg" alt="twitter" /></a>
        </div>
        <p class="footer__copy">
          © 2020 Агентство Индивидуального<br />Туризма – Серенада Круиз
        </p>
      </div>
      <div class="footer__col">
        <h3 class="footer__title">О компании</h3>
        <ul class="footer__list">
          <li><a href="#">О теплоходе</a></li>
          <li><a href="#">Преимущества</a></li>
          <li><a href="#">Галерея</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h3 class="footer__title">Поехали с нами!</h3>
        <ul class="footer__list">
          <li><a href="#">Выберите дату поездки</a></li>
          <li><a href="#">Часто задаваемые вопросы</a></li>
          <li><a href="#">Напишите нам</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h3 class="footer__title">Контакты</h3>
        <ul class="footer__list footer__list--contacts">
          <li>
            <img src="@/assets/icons/phone.svg" alt="phone" />
            <a href="tel:+88003485500">8 (800) 348 55 00</a>
          </li>
          <li class="item_tel">
            <a href="tel:+88003302200">8 (800) 330 22 00</a>
          </li>
          <li>
            <img src="@/assets/icons/mail.svg" alt="mail" />
            <a href="mailto:serenada@cruise.com">serenada@cruise.com</a>
          </li>
        </ul>
      </div>
      <div class="footer__col">
        <p class="footer__copy footer__copy--mob">
          © 2020 Агентство Индивидуального<br />Туризма – Серенада Круиз
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #12161f;
  color: $color-text2;
  padding: 6rem 0;

  &__in {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1023.9px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__logo {
    margin-bottom: 5.6rem;
    @media (max-width: 1023.9px) {
      margin-bottom: 3rem;
      justify-content: center;
      align-items: center;
    }
  }

  &__socials {
    display: flex;
    gap: 3rem;
    margin-bottom: 5.8rem;
    @media (max-width: 1023.9px) {
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
    }
  }
  &__copy {
    font-size: 1.6rem;
    @media (max-width: 1023.9px) {
      display: none;
    }
    &.footer__copy--mob {
      display: none;
      @media (max-width: 1023.9px) {
        display: block;
      }
    }
  }
  &__title {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 4rem;
    @media (max-width: 1300px) {
      font-size: 2rem;
    }
    @media (max-width: 1023.9px) {
      margin-bottom: 2.5rem;
      text-align: center;
      font-size: 2.8rem;
    }
  }
  &__list {
    font-size: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (max-width: 1300px) {
      font-size: 1.6rem;
    }
    @media (max-width: 1023.9px) {
      justify-content: center;
      align-items: center;
      margin-bottom: 2.5rem;
      font-size: 2.2rem;
    }

    &.footer__list--contacts {
      font-size: 2.4rem;
      @media (max-width: 1300px) {
        font-size: 1.8rem;
      }
      @media (max-width: 1023.9px) {
        align-items: flex-start;
        font-size: 2.4rem;
      }
    }

    & li {
      align-items: center;
      display: flex;
      gap: 1.5rem;
    }
    & a {
      text-decoration: none;
      color: $color-text2;
    }
  }
}
.item_tel {
  padding-left: 4.1rem;
}
</style>
