<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Hero />
      <Destinations />
      <About id="about" />
      <Advantages id="advantages" />
      <Tours id="tours" />
      <BookingForm />
      <Gallery id="gallery" />
      <Faqs />
      <Contact id="contact" />
    </main>
    <Footer />
  </div>
  <ScrollTop />
</template>

<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Destinations from "./components/Destinations.vue";
import About from "./components/About.vue";
import Advantages from "./components/Advantages.vue";
import Tours from "./components/Tours.vue";
import BookingForm from "./components/BookingForm.vue";
import Gallery from "./components/Gallery.vue";
import Faqs from "./components/Faqs.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import ScrollTop from "./components/ScrollTop.vue";
</script>

<style lang="scss">
@use "@/assets/styles/main.scss";
</style>
