<script setup>
const props = defineProps({
  icon: String,
  alt: String,
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="info-item">
    <img :src="icon" :alt="alt" />
    <div class="info-item__text">
      <div class="info-item__title">{{ title }}</div>
      <div class="info-item__subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-item {
  display: flex;
  gap: 2rem;
  align-items: center;

  & img {
    @media (max-width: 768px) {
     width: 3.4rem;
     height: 3.4rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 600;
    @media (max-width: 768px) {
     font-size: 1.8rem;
    }
  }

  &__subtitle {
    font-size: 1.8rem;
    font-weight: 400;
    @media (max-width: 768px) {
     font-size: 1.6rem;
    }
  }
}
</style>
