<script setup>
import InfoItem from "@/components/ui/Infoitem.vue";

import routeIcon from "@/assets/icons/pointeronmap.svg?url";
import cardIcon from "@/assets/icons/creditcard.svg?url";
import shipIcon from "@/assets/icons/yacht.svg?url";
import noAlcoholIcon from "@/assets/icons/nodrinking.svg?url";
import buffetIcon from "@/assets/icons/meal.svg?url";
import towerIcon from "@/assets/icons/tower.svg?url";

const benefits = [
  { icon: routeIcon, alt: "Маршрут", title: "Уникальный", subtitle: "маршрут" },
  {
    icon: cardIcon,
    alt: "Цены",
    title: "Доступные цены",
    subtitle: "от 800 евро",
  },
  {
    icon: shipIcon,
    alt: "Инфраструктура",
    title: "Инфраструктура",
    subtitle: "лайнерa 5*",
  },
  {
    icon: noAlcoholIcon,
    alt: "Алкоголь",
    title: "Алкоголь",
    subtitle: "отсутствует на борту",
  },
  {
    icon: buffetIcon,
    alt: "Шведский стол",
    title: "Шведский стол",
    subtitle: "— полный пансион",
  },
  {
    icon: towerIcon,
    alt: "Экскурсии",
    title: "Экскурсии",
    subtitle: "по легендарным местам",
  },
];
</script>

<template>
  <section class="section section--bg_color">
    <div class="container container--v3">
      <div class="section__head">
        <h2 class="section__title">Преимущества нашей компании</h2>
      </div>
      <div class="benefits">
        <InfoItem
          v-for="(b, i) in benefits"
          :key="i"
          :icon="b.icon"
          :alt="b.alt"
          :title="b.title"
          :subtitle="b.subtitle"
          class="benefits__item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  gap: 10rem 20rem;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem 5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem 10rem;
    padding-left: 2rem;
  }

  &__item {
    :deep(.info-item__title),
    :deep(.info-item__subtitle) {
      font-size: 2.6rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }
}
</style>
