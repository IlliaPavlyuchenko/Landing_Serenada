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
      <p class="tour-card__location">
        <svg
          class="tour-card__icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C5.22 0 2.14453 3.07547 2.14453 6.85547C2.14453 8.35137 2.61703 9.77273 3.51211 10.9652L8.57742 17.7873C8.59008 17.8039 8.60941 17.8102 8.62348 17.825C8.8766 18.096 9.24188 18.0278 9.42223 17.7873C10.8809 15.8411 13.5545 12.2063 14.5825 10.8352C14.5825 10.8352 14.5828 10.8341 14.5832 10.8334L14.5895 10.825C15.4178 9.66129 15.8555 8.28879 15.8555 6.85547C15.8555 3.07547 12.78 0 9 0ZM9 10.5539C6.9648 10.5539 5.30156 8.89066 5.30156 6.85547C5.30156 4.82027 6.9648 3.15703 9 3.15703C11.0352 3.15703 12.6984 4.82027 12.6984 6.85547C12.6984 8.89066 11.0352 10.5539 9 10.5539Z"
            fill="#E69A2F"
            fill-opacity="0.9"
          />
        </svg>
        {{ location }}
      </p>
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
  //cursor: pointer;

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
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  &__location {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
</style>
