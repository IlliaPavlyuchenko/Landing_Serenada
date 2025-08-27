<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Hero />
      <Destinations />
      <About />
      <Advantages />
      <Tours />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Destinations from "./components/Destinations.vue";
import About from "./components/About.vue";
import Advantages from "./components/Advantages.vue";
import Tours from "./components/Tours.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
@use "@/assets/styles/main.scss";
</style>
