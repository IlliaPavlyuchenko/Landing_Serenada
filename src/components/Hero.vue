<script setup>
import Button from "@/components/ui/Buttons.vue";
import InfoItem from "@/components/ui/Infoitem.vue";
import walletIcon from "@/assets/icons/wallet.svg?url";
import calendarIcon from "@/assets/icons/calendar.svg?url";
</script>

<template>
  <section class="section section--bg">
    <div class="container">
      <div class="hero">
        <div class="hero__img_bg"></div>
        <div class="hero__content">
          <h1 class="hero__title">Круиз мечты по Средиземному морю</h1>
          <p class="hero__subtitle">
            Насладитесь комфортным отдыхом со своей семьей на лучших курортах
            средиземного моря от <span>800 евро</span>
          </p>
          <div class="hero__buttons">
            <Button variant="primary">Забронировать</Button>
            <Button variant="outline">Перезвоните мне</Button>
          </div>
          <div class="hero__info">
            <InfoItem
              :icon="walletIcon"
              alt="Скидка"
              title="Скидка 25%"
              subtitle="На ближайший круиз"
            />
            <InfoItem
              :icon="calendarIcon"
              alt="Календарь"
              title="24 августа"
              subtitle="Дата ближайшего круиза"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section--bg {
  padding: 0;
}

.hero {
  height: calc(100dvh - 8rem);
  display: flex;
  align-items: center;

  &__img_bg {
    // height: 100dvh;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(@/assets/images/hero.png);
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    z-index: -1;
    filter: brightness(0.7);
  }

  &__content {
    color: $color-white;
    padding-bottom: 15rem;

    @media (max-width: 768px) {
      padding-bottom: 5rem;
    }
  }

  &__title {
    font-family: $font-title;
    font-size: 6.4rem;
    font-weight: bold;
    max-width: 120.1rem;
    margin-bottom: 3.5rem;

    @media (max-width: 768px) {
      font-size: 2.8rem;
      margin-bottom: 1rem;
    }
  }
  &__subtitle {
    font-size: 2.6rem;
    font-weight: 300;
    line-height: 4rem;
    max-width: 86rem;
    margin-bottom: 11.7rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }

    & span {
      color: $color-primary;
      font-weight: 600;
    }
  }
  &__buttons {
    display: flex;
    gap: 4rem;
    margin-bottom: 6rem;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      row-gap: 2.2rem;
      margin-bottom: 2.4rem;
    }
  }
  &__info {
    display: flex;
    gap: 11.6rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 1rem;
      width: 26rem;
      margin: 0 auto;
    }
  }
}
</style>
