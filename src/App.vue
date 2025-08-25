<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Hero />
      <Destinations />
      <About />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Destinations from "./components/Destinations.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
@use "@/assets/styles/main.scss";
</style>
