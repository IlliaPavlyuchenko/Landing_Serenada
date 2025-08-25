<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  { alt: "Барселона", filename: "01.png" },
  { alt: "Миконос", filename: "02.png" },
  { alt: "Мальта", filename: "03.png" },
  { alt: "Рим", filename: "04.png" },
];

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

const swiperBreakpoints = {
  1440: {
    slidesPerView: 4,
    spaceBetween: 0,
  },

  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },

  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },

  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};
</script>

<template>
  <section class="destinations">
    <div class="container container--v2">
      <swiper
        :slides-per-view="4"
        :space-between="30"
        :breakpoints="swiperBreakpoints"
        :modules="[Navigation]"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :loop="true"
        class="destinations__list"
      >
        <swiper-slide
          v-for="(item, index) in destinations"
          :key="index"
          class="destination-card"
        >
          <img
            :src="getImageUrl(item.filename)"
            :alt="item.alt"
            class="destination-card__img"
          />
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.destinations {
  margin-top: -12rem;
  position: relative;
  z-index: 1;

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.destination-card {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-prev,
.swiper-button-next {
  display: none;
  @media (max-width: 1439.9px) {
    color: #fff;
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 50%;
    background-color: #a8afc3;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
  }
}
</style>
