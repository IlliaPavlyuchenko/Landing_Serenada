<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Какие бывают каюты на кораблях?",
    answer:
      "На кораблях бывают внутренние, внешние с окном, с балконом и люксы.",
    open: false,
  },
  {
    question: "Что не входит в стоимость путевки?",
    answer:
      "Как правило, не включены алкогольные напитки, экскурсии и некоторые услуги на борту.",
    open: false,
  },
  {
    question: "Какие вещи нужно брать с собой в поездку?",
    answer:
      "Ваши вещи в путешествии почти не отличаются от тех, которые вы берете на курорт. Спортивная одежда подойдет для дня, вечером может быть прохладно — возьмите теплые вещи.",
    open: false,
  },
  {
    question: "Как уберечься от морской болезни при путешествии?",
    answer:
      "Рекомендуется иметь с собой специальные лекарства и выбирать каюту в центральной части судна.",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value.forEach((faq, i) => {
    if (i === index) {
      faq.open = !faq.open;
    } else {
      faq.open = false;
    }
  });
};
</script>

<template>
  <section class="section">
    <div class="container container--v4">
      <div class="section__head">
        <h2 class="section__title">Часто задаваемые вопросы</h2>
      </div>
      <div class="faq">
        <div
          class="faq__item"
          v-for="(faq, index) in faqs"
          :key="index"
          @click="toggleFaq(index)"
        >
          <div class="faq__question">
            <span>{{ faq.question }}</span>
            <svg
              class="faq__icon"
              :class="{ open: faq.open }"
              width="40"
              height="13"
              viewBox="0 0 40 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_281)">
                <path
                  d="M18.5714 13.4288C18.3928 13.4288 18.1913 13.3378 18.0585 13.2035L7.65706 2.68645C7.52278 2.55068 7.43421 2.34845 7.43421 2.1679C7.43421 1.98734 7.52421 1.78368 7.65706 1.64934L8.77278 0.521232C8.90706 0.385454 9.08564 0.295898 9.28563 0.295898C9.46421 0.295898 9.66563 0.386898 9.79849 0.521232L18.5714 9.39156L27.3442 0.521232C27.4785 0.385454 27.6785 0.295898 27.8571 0.295898C28.0356 0.295898 28.2371 0.386898 28.3699 0.521232L29.4856 1.64934C29.6199 1.78512 29.7085 1.98734 29.7085 2.1679C29.7085 2.34845 29.6185 2.55212 29.4856 2.68645L19.0842 13.2035C18.9499 13.3392 18.7499 13.4288 18.5714 13.4288Z"
                  fill="#2F2F2F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_281">
                  <rect
                    x="40"
                    width="13"
                    height="40"
                    rx="6.5"
                    transform="rotate(90 40 0)"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div v-if="faq.open" class="faq__answer">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  &__item {
    background-color: $color-white;
    color: $color-text;
    border-radius: 0.8rem;
    padding: 3rem 4rem;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 600;
  }
  &__answer {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.6;
    width: 95%;
    margin-top: 2rem;
  }
  &__icon {
    transition: transform 0.3s ease;
    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>
