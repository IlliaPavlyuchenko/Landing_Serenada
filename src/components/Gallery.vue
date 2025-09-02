<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const imagesTop = [
  new URL("../assets/images/gallery1.png", import.meta.url).href,
  new URL("../assets/images/gallery2.png", import.meta.url).href,
  new URL("../assets/images/gallery3.png", import.meta.url).href,
  new URL("../assets/images/gallery4.png", import.meta.url).href,

  new URL("../assets/images/gallery8.png", import.meta.url).href,
  new URL("../assets/images/gallery8.png", import.meta.url).href,
  new URL("../assets/images/gallery8.png", import.meta.url).href,
  new URL("../assets/images/gallery8.png", import.meta.url).href,
  new URL("../assets/images/gallery8.png", import.meta.url).href,
  new URL("../assets/images/gallery8.png", import.meta.url).href,
];
const imagesBottom = [
  new URL("../assets/images/gallery5.png", import.meta.url).href,
  new URL("../assets/images/gallery6.png", import.meta.url).href,
  new URL("../assets/images/gallery7.png", import.meta.url).href,
  new URL("../assets/images/gallery8.png", import.meta.url).href,

  new URL("../assets/images/gallery7.png", import.meta.url).href,
  new URL("../assets/images/gallery7.png", import.meta.url).href,
  new URL("../assets/images/gallery7.png", import.meta.url).href,
  new URL("../assets/images/gallery7.png", import.meta.url).href,
  new URL("../assets/images/gallery7.png", import.meta.url).href,
  new URL("../assets/images/gallery7.png", import.meta.url).href,
];

// const groupedImages = [];
// for (let i = 0; i < images.length; i += 2) {
//   groupedImages.push(images.slice(i, i + 2));
// }

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
    spaceBetween: 30,
  },
};
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__head">
        <h2 class="section__title">Путешествуйте вместе с нами!</h2>
      </div>
      <div class="gallery">
        <Swiper
          :modules="[Navigation, Scrollbar, Autoplay]"
          :slides-per-view="4"
          :space-between="30"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :scrollbar="{
            el: '.swiper-scrollbar-custom',
            draggable: true,
          }"
          :autoplay="{ delay: 3000, disableOnInteraction: true }"
          :speed="800"
          :loop="true"
          :breakpoints="swiperBreakpoints"
        >
          <SwiperSlide v-for="(img, i) in imagesTop" :key="i">
            <div class="gallery__col">
              <img :src="img" class="gallery__img" />
              <img
                :src="imagesBottom[i]"
                class="gallery__img gallery__img--bottom"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="gallery__controls">
          <div class="swiper-navigation-custom">
            <div class="swiper-button-prev"></div>
            <div class="swiper-scrollbar-custom"></div>
            <div class="swiper-button-next"></div>
          </div>
          <a href="#" class="gallery__link"> Все фотографии > </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
}
.gallery {
  &__col {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  &__img {
    width: 100%;
    height: auto;
    border-radius: 1.2rem;
    display: block;
    margin-left: -8rem;
  }

  &__img--bottom {
    margin-left: 10rem;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    height: 6rem;
    gap: 4rem;
    padding: 0 7rem;
  }

  &__link {
    color: $color-text;
    font-size: 2.2rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    align-items: center;
  }
}

.swiper-navigation-custom {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
  height: 6rem;
}

.swiper-button-prev,
.swiper-button-next {
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #a8afc3;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: $color-secondary;
  }
  &::after {
    font-size: 2rem;
    color: $color-white;
  }
}

.swiper-scrollbar-custom {
  position: static;
  flex-grow: 1;
  height: 0.5rem;
  background: #071c554f;

  :deep(.swiper-scrollbar-drag) {
    background: #6a7799;
  }
}
</style>
