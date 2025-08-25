<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: { type: String, default: "primary" },
});

const variantClass = computed(() =>
  props.variant === "outline" ? "btn--outline" : "btn--primary"
);
</script>

<template>
  <button :class="['btn', variantClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  min-width: 34rem;
  padding: 2.4rem 3.2rem;
  border-radius: 0.8rem;
  font-size: 2.8rem;
  font-weight: 700;
  font-family: $font-main;
  cursor: pointer;
  transition: all 0.4s ease-in;

  @media (max-width: 768px) {
    font-size: 2rem;
    min-width: 26rem;
  }

  &--primary {
    background-color: $color-primary;
    color: $color-white;
    border: none;

    &:hover {
      background-color: $color-white;
      color: $color-primary;
    }
  }

  &--outline {
    background: transparent;
    border: 0.2rem solid $color-white;
    color: $color-white;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
