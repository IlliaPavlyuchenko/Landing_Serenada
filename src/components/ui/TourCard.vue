<script setup>
defineProps({
  img: String,
  title: String,
  location: String,
});
</script>

<template>
  <div class="tour-card">
    <div class="tour-card__image_block">
      <img :src="img" :alt="title" class="tour-card__image" />
    </div>
    <div class="tour-card__content">
      <h3 class="tour-card__title">{{ title }}</h3>
      <p class="tour-card__location">📍 {{ location }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tour-card {
  //background: #fff;
  //   display: flex;
  //   flex-direction: column;
  //background-color: red;
  border-radius: 1.2rem;
  max-width: 38rem;
  width: 100%;
  height: 43rem;
  overflow: hidden;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  margin-bottom: 3.5rem;
  cursor: pointer;

  //   &:hover {
  //     transform: translateY(-5px);
  //   }

  &__image_block {
    height: 29rem;
    display: block;
    margin-bottom: 2rem;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  &__content {
    padding: 1rem 1.5rem;
    text-align: left;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    max-height: 10rem;
    height: 100%;
    width: 100%;
  }

  &__title {
    font-size: 1.8rem;
    margin: 0.5rem 0;
  }

  &__location {
    font-size: 1.4rem;
    color: #777;
  }
}
</style>
