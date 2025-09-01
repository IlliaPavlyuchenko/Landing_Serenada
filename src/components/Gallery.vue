<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const images = [
  new URL("../assets/images/gallery1.png", import.meta.url).href,

  new URL("../assets/images/gallery2.png", import.meta.url).href,

  new URL("../assets/images/gallery3.png", import.meta.url).href,

  new URL("../assets/images/gallery4.png", import.meta.url).href,

  new URL("../assets/images/gallery5.png", import.meta.url).href,

  new URL("../assets/images/gallery6.png", import.meta.url).href,

  new URL("../assets/images/gallery7.png", import.meta.url).href,

  new URL("../assets/images/gallery8.png", import.meta.url).href,
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
        <h2 class="section__title">Путешествуйте вместе с нами!</h2>
      </div>
      <div class="gallery">
        <Swiper
          :modules="[Navigation, Scrollbar]"
          :slides-per-view="4"
          :space-between="20"
          navigation
          :scrollbar="{ draggable: true }"
        >
          <SwiperSlide v-for="(img, i) in images" :key="i">
            <img :src="img" />
          </SwiperSlide>
        </Swiper>

        <div class="flex justify-end mt-4">
          <a href="/gallery" class="flex items-center gap-2 text-blue-600">
            Все фотографии →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
