<script setup>
import { ref } from "vue";
import Button from "@/components/ui/Buttons.vue";

const form = ref({
  name: "",
  phone: "",
  message: "",
});

const submitForm = () => {
  console.log("Форма отправлена:", form.value);
  alert("Спасибо! Мы свяжемся с вами.");
  form.value = { name: "", phone: "", message: "" };
};
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__head">
        <h2 class="section__title section__title--w">Задайте нам вопрос</h2>
      </div>
      <div class="contact">
        <div class="contact__img"></div>
        <form class="contact__form" @submit.prevent="submitForm">
          <input
            type="text"
            placeholder="Ваше имя"
            v-model="form.name"
            required
          />
          <input
            type="tel"
            placeholder="+38 (___) ___-__-__"
            v-model="form.phone"
            required
          />
          <textarea
            placeholder="Ваше сообщение..."
            v-model="form.message"
            required
          ></textarea>
          <div class="contact__btn">
            <Button variant="primary" size="md" type="submit">Отправить</Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.section__title--w {
  padding-top: 8rem;
}
.container {
  position: relative;
  min-height: 41.5rem;
}

.contact {
  display: flex;
  justify-content: center;
  &__img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(@/assets/images/bookingbg.png);
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    z-index: -1;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 80rem;
    width: 100%;
    padding-bottom: 8rem;

    input,
    textarea {
      padding: 2.7rem 4rem;
      border: 3px solid $color-text2;
      border-radius: 0.7rem;
      width: 100%;
      font-size: 2.4rem;
      font-weight: 500;
      color: $color-text2;
      background-color: transparent;
    }

    textarea {
      resize: vertical;
      min-height: 22rem;
      margin-bottom: 1rem;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30rem;
    margin: 0 auto;
  }
}
</style>
