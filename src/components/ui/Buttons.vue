<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: { type: String, default: "primary" },
  size: { type: String, default: "lg" },
});

const variantClass = computed(() =>
  props.variant === "outline" ? "btn--outline" : "btn--primary"
);

const sizeClass = computed(() => (props.size === "md" ? "btn--md" : "btn--lg"));
</script>

<template>
  <button :class="['btn', variantClass, sizeClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: 0.8rem;
  font-weight: 700;
  font-family: $font-main;
  cursor: pointer;
  transition: all 0.4s ease-in;

  &--lg {
    min-width: 34rem;
    padding: 2.4rem 3.2rem;
    font-size: 2.8rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      min-width: 26rem;
    }
  }

  &--md {
    min-width: 30rem;
    padding: 2.2rem 2.4rem;
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      min-width: 24rem;
    }
  }

  &--primary {
    background-color: $color-primary;
    color: $color-white;
    border: none;

    &:hover {
      background-color: $color-secondary;
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
