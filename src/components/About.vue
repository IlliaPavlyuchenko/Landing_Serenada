<script setup>
import Button from "@/components/ui/Buttons.vue";
</script>

<template>
  <section class="section section--bg_color">
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">Что вас ждет на нашем теплоходе</h2>
      </div>
      <div class="about">
        <div class="about__img">
          <img
            loading="lazy"
            src="../assets/images/about.png"
            alt="Отдых на борту теплохода"
          />
        </div>
        <div class="about__info">
          <p class="about__text">
            Даже если вы никогда не были в путешествии на круизном теплоходе,
            будьте уверенны - нам удастся вас удивить! Интересная программа,
            3х-разовое питание, аква-зона и развлечения для ваших детей. И все
            это в открытом море!
          </p>
          <p class="about__text">
            Вам ни о чем не нужно беспокоиться, просто расслабьтесь и
            насладитесь отпуском! Отдохните в СПА центре, или сходите в
            кинотеатр в свободное время. Днем вас ждут увлекательные экскурсии
            по самым интересным курортам Средиземного моря.
          </p>
          <Button variant="primary" size="md">Забронировать</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  gap: 16.5rem;
  @media (max-width: 1440px) {
    gap: 5rem;
  }
  @media (max-width: 1023.9px) {
    flex-direction: column;
  }

  &__img {
    max-width: 100%;
    width: 74rem;
    height: 50rem;
    @media (max-width: 1023.9px) {
      height: auto;
    }

    & img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      object-position: center;
    }
  }

  &__info {
    max-width: 76.8rem;
    @media (max-width: 1440px) {
      max-width: 50%;
    }
    @media (max-width: 1023.9px) {
      max-width: 90%;
    }
  }

  &__text {
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 3.8rem;
    @media (max-width: 1440px) {
      font-size: 2rem;
    }

    &:not(:last-of-type) {
      margin-bottom: 3.7rem;
    }
    &:last-of-type {
      margin-bottom: 8.4rem;
    }
  }
}
</style>
