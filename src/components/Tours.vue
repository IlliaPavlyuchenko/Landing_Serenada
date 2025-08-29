<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import TourCard from "@/components/ui/TourCard.vue";

const prevButton = ref(null);
const nextButton = ref(null);

const tours = [
  {
    img: new URL("../assets/images/barselona.png", import.meta.url).href,
    title: "Обзорная экскурсия по набережной",
    location: "Барселона",
  },
  {
    img: new URL("../assets/images/malta.png", import.meta.url).href,
    title: "Насладиться красотой Мальты",
    location: "Мальта",
  },
  {
    img: new URL("../assets/images/miconos.png", import.meta.url).href,
    title: "Обзорная экскурсия по городу",
    location: "Миконос",
  },
  {
    img: new URL("../assets/images/rome.png", import.meta.url).href,
    title: "Прогулка по самым прекрасным местам Рима",
    location: "Рим",
  },
  {
    img: new URL("../assets/images/about.png", import.meta.url).href,
    title: "Lorem",
    location: "Lorem",
  },
  {
    img: new URL("../assets/images/about.png", import.meta.url).href,
    title: "Lorem",
    location: "Lorem",
  },
];

const swiperBreakpoints = {
  1440: {
    slidesPerView: 4,
    spaceBetween: 30,
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
  <section class="section">
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">Самое интересное — для вас!</h2>
      </div>
      <div class="tours">
        <Swiper
          :slides-per-view="4"
          :space-between="30"
          :breakpoints="swiperBreakpoints"
          :modules="[Navigation]"
          :navigation="{ prevEl: prevButton, nextEl: nextButton }"
          :loop="true"
          class="tours__slider"
        >
          <SwiperSlide v-for="(tour, i) in tours" :key="i">
            <TourCard
              :img="tour.img"
              :title="tour.title"
              :location="tour.location"
              class="tour__card"
            />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev" ref="prevButton"></div>
        <div class="swiper-button-next" ref="nextButton"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tours {
  position: relative;
}

.tours__slider {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 165rem;
}

.tour__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  justify-self: center;
  flex-grow: 1;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  //top test
  color: #fff;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  background-color: #a8afc3;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: $color-secondary;
  }
}
.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}
</style>
