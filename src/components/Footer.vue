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
        <ul>
          <li><a href="#">О теплоходе</a></li>
          <li><a href="#">Преимущества</a></li>
          <li><a href="#">Галерея</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h3 class="footer__title">Поехали с нами!</h3>
        <ul>
          <li><a href="#">Выберите дату поездки</a></li>
          <li><a href="#">Часто задаваемые вопросы</a></li>
          <li><a href="#">Напишите нам</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h3 class="footer__title">Контакты</h3>
        <ul>
          <li>
            <img src="@/assets/icons/phone.svg" alt="phone" /> 8 (800) 348 55 00
          </li>
          <li>8 (800) 330 22 00</li>
          <li><img src="@/assets/icons/mail.svg" alt="mail" /> serenada@cruise.com</li>
        </ul>
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
  }

  &__logo {
    margin-bottom: 5.6rem;
  }

  &__socials {
    display: flex;
    gap: 3rem;
    margin-bottom: 5.8rem;
  }
  &__copy {
    font-size: 1.6rem;
  }
}
</style>
